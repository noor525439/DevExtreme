import { Minus, ChevronRight, ChevronDown, Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import Data from "./Data";
import { useSelector, useDispatch } from "react-redux";
import { setSearch, applyFilter, clearSearch } from "./searchSlice";

const buildHierarchy = (data = []) => {
  const map = new Map();
  const roots = [];

  data.forEach((item) => {
    map.set(item.child_product_id, { ...item, children: [] });
  });

  data.forEach((item) => {
    const node = map.get(item.child_product_id);
    if (item.parent_id == null) {
      roots.push(node);
    } else {
      const parent = map.get(item.parent_id);
      if (parent) {
        parent.children.push(node);
      } else {
        roots.push(node);
      }
    }
  });

  return roots;
};

const getVisibleRows = (nodes = [], level = 0, filter = "", expanded = {}) => {
  const rows = [];
  const f = (s) => (s ?? "").toString().toLowerCase();

  for (const node of nodes) {
    const nodeMatches = !filter || f(node.child_name).includes(filter);
    const childRows =
      node.children && node.children.length
        ? getVisibleRows(node.children, level + 1, filter, expanded)
        : [];

    if (nodeMatches || childRows.length > 0) {
      rows.push({ node, level });

      if (expanded[node.child_product_id]) {
        rows.push(...childRows);
      }
    }
  }
  return rows;
};

const Modules = ({ activeTab = "default" }) => {
  const [modules, setModules] = useState([]);
  const [expanded, setExpanded] = useState({});
  const [showFilters, setShowFilters] = useState(true);

  
  const searchState = useSelector((state) => state.search.search);
  const appliedState = useSelector((state) => state.search.applied);
  const dispatch = useDispatch();

  useEffect(() => {
    const raw = Data?.[0]?.data ?? [];
    setModules(buildHierarchy(raw));
  }, []);

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleApplyFilter = () => {
    dispatch(applyFilter({ [activeTab]: searchState?.[activeTab] || "" }));
  };

  const handleReset = () => {
    dispatch(clearSearch());
  };


  const filterStr = (appliedState?.[activeTab] || "").toString().toLowerCase().trim();
  const visibleRows = getVisibleRows(modules, 0, filterStr, expanded);

  return (
    <div className="p-4 w-[365px] sm:w-[465px] md:w-full mt-20 bg-white">
      <h1 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
        Batch & Recipe List
      </h1>


      <div className="bg-white p-3 md:p-4 rounded-lg shadow mb-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-semibold text-base sm:text-lg md:text-xl">
            Filters
          </h2>
          <div
            className="bg-white border-2 border-indigo-500 rounded-full text-center font-bold text-indigo-500 h-6 w-6 cursor-pointer md:hidden"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Minus size={20} />
          </div>
        </div>

        <div className={`${showFilters ? "block" : "hidden"} md:block`}>
          <div className="flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0">
            <select className="border rounded px-2 py-1 text-sm md:text-base">
              <option>Equal</option>
              <option>Contains</option>
            </select>
            <input
              type="text"
              placeholder="Search by name"
              value={searchState?.[activeTab] || ""}
              onChange={(e) =>
                dispatch(setSearch({ [activeTab]: e.target.value }))
              }
              className="border rounded px-2 py-1 flex-1 text-sm md:text-base"
            />
          </div>

          <div className="mt-2 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
            <button
              className="bg-indigo-500 text-white px-3 py-1 rounded text-sm md:text-base"
              onClick={handleApplyFilter}
            >
              Apply Filter
            </button>
            <button
              className="bg-indigo-500 text-white px-3 py-1 rounded text-sm md:text-base"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow overflow-x-auto h-[430px]">
        <table className="min-w-[800px] w-full text-left border-collapse text-sm sm:text-base">
          <thead className="sticky top-0 z-50 shadow">
            <tr className="bg-indigo-500 text-white">
              {[
                "Product Name",
                "Product Type",
                "Quantity",
                "Unit Selected",
                "Cost",
                "Base Unit",
                "Unit Converted",
                "Final Quantity",
                "Path",
              ].map((col, idx) => (
                <th
                  key={idx}
                  className="p-2 border border-gray-300 whitespace-nowrap"
                >
                  <div className="flex justify-between items-center">
                    <span>{col}</span>
                    <Search className="w-4 h-4 cursor-pointer hidden sm:block" />
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {visibleRows.length === 0 ? (
              <tr>
                <td colSpan="9" className="p-4 text-center text-gray-400">
                  No results found
                </td>
              </tr>
            ) : (
              visibleRows.map(({ node, level }, idx) => (
                <tr
                  key={node.child_product_id ?? idx}
                  className={`${
                    idx % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } hover:bg-gray-100 transition`}
                >
                  <td className="p-2 border border-gray-300">
                    <div
                      className="flex items-center gap-2 cursor-pointer"
                      style={{ paddingLeft: `${level * 20}px` }}
                    >
                      {node.children && node.children.length > 0 ? (
                        <span
                          onClick={() => toggleExpand(node.child_product_id)}
                        >
                          {expanded[node.child_product_id] ? (
                            <ChevronDown size={16} />
                          ) : (
                            <ChevronRight size={16} />
                          )}
                        </span>
                      ) : (
                        <span className="w-4" />
                      )}
                      {node.child_name || node.parent_name}
                    </div>
                  </td>
                  <td className="p-2 border border-gray-300">
                    {node.product_type}
                  </td>
                  <td className="p-2 border border-gray-300">{node.qty}</td>
                  <td className="p-2 border border-gray-300">
                    {node.unit_selected_name}
                  </td>
                  <td className="p-2 border border-gray-300">{node.cost}</td>
                  <td className="p-2 border border-gray-300">
                    {node.base_unit_name}
                  </td>
                  <td className="p-2 border border-gray-300">
                    {node.base_unit_coverted}
                  </td>
                  <td className="p-2 border border-gray-300">{node.final_qty}</td>
                  <td className="p-2 border border-gray-300">{node.path}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <p className="text-base sm:text-lg font-bold mt-2">
        Records:{" "}
        <span className="font-semibold">
          {visibleRows.length}/{Data?.[0]?.data?.length ?? 0}
        </span>
      </p>
    </div>
  );
};

export default Modules;
