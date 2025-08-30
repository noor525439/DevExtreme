import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

/* --------------------- sample data (unchanged) --------------------- */
const transactionsData = [
  { day: "Mon", value: 200 },
  { day: "Tue", value: 400 },
  { day: "Wed", value: 300 },
  { day: "Thu", value: 500 },
  { day: "Fri", value: 350 },
  { day: "Sat", value: 420 },
  { day: "Sun", value: 380 },
];

const salesOrdersRevenue = [
  { name: "A", sales: 100, orders: 200, revenue: 300 },
  { name: "B", sales: 200, orders: 250, revenue: 350 },
  { name: "C", sales: 150, orders: 300, revenue: 400 },
  { name: "D", sales: 180, orders: 280, revenue: 370 },
  { name: "E", sales: 220, orders: 320, revenue: 420 },
];

const cpuData = [
  { name: "A", value: 20 },
  { name: "B", value: 40 },
  { name: "C", value: 35 },
  { name: "D", value: 50 },
  { name: "E", value: 45 },
];
const memoryData = [
  { name: "A", value: 60 },
  { name: "B", value: 80 },
  { name: "C", value: 75 },
  { name: "D", value: 90 },
  { name: "E", value: 100 },
];

const incomeData = [
  { month: "Jan", register: 100, premium: 200 },
  { month: "Feb", register: 150, premium: 300 },
  { month: "Mar", register: 120, premium: 250 },
  { month: "Apr", register: 180, premium: 320 },
  { month: "May", register: 160, premium: 270 },
  { month: "Jun", register: 200, premium: 310 },
  { month: "Jul", register: 90, premium: 220 },
];

const pieData = [
  { name: "Gross Sales", value: 492, color: "#8b5cf6" },
  { name: "Purchases", value: 87000, color: "#f97316" },
  { name: "Tax Return", value: 882, color: "#22c55e" },
];
const barData = [
  { year: "2014", sales: 52, orders: 22 },
  { year: "2015", sales: 40, orders: 35 },
  { year: "2016", sales: 30, orders: 22 },
  { year: "2017", sales: 45, orders: 50 },
  { year: "2018", sales: 28, orders: 20 },
  { year: "2019", sales: 50, orders: 42 },
];

const expensesData = Array.from({ length: 20 }, (_, i) => ({ name: i, value: Math.random() * 50 }));
const budgetData = Array.from({ length: 20 }, (_, i) => ({ name: i, value: Math.random() * 60 }));
const balanceData = Array.from({ length: 20 }, (_, i) => ({ name: i, value: Math.random() * 40 }));

/* ----------------- Dashboard (dark-mode aware) ----------------- */
export default function Dashboard() {
  // detect dark mode (class on <html> OR user preference)
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;
    const root = document.documentElement;
    const systemPref = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    return root.classList.contains("dark") || !!systemPref;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const root = document.documentElement;
    
    const mql = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");
    const handlePref = (e) => setIsDark(root.classList.contains("dark") || !!e.matches);

    if (mql) {
  
      if (mql.addEventListener) mql.addEventListener("change", handlePref);
      else if (mql.addListener) mql.addListener(handlePref);
    }


    const obs = new MutationObserver(() => {
      setIsDark(root.classList.contains("dark") || (mql && mql.matches));
    });
    obs.observe(root, { attributes: true, attributeFilter: ["class"] });

    return () => {
      if (mql) {
        if (mql.removeEventListener) mql.removeEventListener("change", handlePref);
        else if (mql.removeListener) mql.removeListener(handlePref);
      }
      obs.disconnect();
    };
  }, []);


  const theme = {
    axis: isDark ? "#9CA3AF" : "#6B7280", 
    subText: isDark ? "#9CA3AF" : "#6B7280",
    text: isDark ? "#E5E7EB" : "#111827",
    cardBg: isDark ? "#0f1724" : "#ffffff", 
    tooltipBg: isDark ? "#0b1220" : "#ffffff",
    tooltipText: isDark ? "#E5E7EB" : "#111827",
    gridFill: isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.04)",
    orange: "#f97316",
    cyan: "#0ea5e9",
    blue: "#2563eb",
    purple: "#8b5cf6",
    teal: "#14b8a6",
    green: "#22c55e",
    red: "#ef4444",
  };

  const tooltipProps = {
    contentStyle: {
      backgroundColor: theme.tooltipBg,
      border: "1px solid rgba(0,0,0,0.06)",
      color: theme.tooltipText,
      boxShadow: "0 1px 6px rgba(0,0,0,0.08)",
      borderRadius: 6,
    },
    itemStyle: { color: theme.tooltipText },
    cursor: { stroke: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)" },
  };

  return (
    <div className={`p-6 min-h-screen space-y-6 ${isDark ? "bg-gray-900" : "bg-gray-100"}`}>
      <h1 className={`text-3xl font-bold text-center ${isDark ? "text-gray-100" : "text-gray-900"}`}>Status Statistics</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:col-span-2">
          <div className={`p-4 rounded-2xl shadow h-48 ${isDark ? "bg-gray-800" : "bg-white"}`}>
            <h3 className={`text-2xl font-bold ${isDark ? "text-gray-100" : "text-gray-900"}`}>Transactions</h3>
            <div className="flex items-center justify-between">
              <p className={`text-xl font-bold ${isDark ? "text-gray-100" : "text-gray-900"}`}>1352</p>
              <span className="text-green-500 text-xl">+1.37%</span>
            </div>
            <div className="h-28 mt-2">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={transactionsData}>
                  <Tooltip {...tooltipProps} />
                  <Line type="linear" dataKey="value" stroke={theme.orange} strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className={`p-4 rounded-2xl shadow h-48 ${isDark ? "bg-gray-800" : "bg-white"}`}>
            <h3 className={`text-2xl font-bold ${isDark ? "text-gray-100" : "text-gray-900"}`}>Sales Orders Revenue</h3>
            <div className={`flex space-x-6 text-ls mt-1 mb-2 ${isDark ? "text-gray-200" : "text-gray-700"}`}>
              <span>Sales: <b>563</b></span>
              <span>Orders: <b>720</b></span>
              <span>Revenue: <b>5900</b></span>
            </div>
            <div className="h-28 mt-1">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={salesOrdersRevenue}>
                  <Tooltip {...tooltipProps} />
                  <Area type="monotone" dataKey="sales" stackId="1" stroke={theme.cyan} fill={theme.cyan} />
                  <Area type="monotone" dataKey="orders" stackId="1" stroke={theme.blue} fill={theme.blue} />
                  <Area type="monotone" dataKey="revenue" stackId="1" stroke={theme.blue} fill={theme.blue} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className={`p-4 rounded-2xl shadow h-48 ${isDark ? "bg-gray-800" : "bg-white"}`}>
            <h3 className={`text-2xl font-bold ${isDark ? "text-gray-100" : "text-gray-900"}`}>Sales Analytics</h3>
            <div className="flex items-center justify-between">
              <p className={`text-xl font-bold ${isDark ? "text-gray-100" : "text-gray-900"}`}>27,632</p>
              <p className="text-blue-500 text-xl">78%</p>
            </div>
            <div className={`w-full ${isDark ? "bg-gray-700" : "bg-gray-200"} h-2 rounded-full mt-2`}>
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: "78%" }}></div>
            </div>
          </div>

          <div className={`p-4 rounded-2xl shadow h-48 grid grid-cols-2 gap-4 ${isDark ? "bg-gray-800" : "bg-white"}`}>
            <div>
              <h3 className={`text-2xl font-bold ${isDark ? "text-gray-100" : "text-gray-900"}`}>CPU</h3>
              <p className={`text-xl mb-1 ${isDark ? "text-gray-100" : "text-gray-900"}`}>55%</p>
              <div className="h-20">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={cpuData}>
                    <Tooltip {...tooltipProps} />
                    <Bar dataKey="value" fill={theme.red} radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div>
              <h3 className={`text-2xl font-bold ${isDark ? "text-gray-100" : "text-gray-900"}`}>Memory</h3>
              <p className={`text-xl mb-1 ${isDark ? "text-gray-100" : "text-gray-900"}`}>123,65</p>
              <div className="h-20">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={memoryData}>
                    <Tooltip {...tooltipProps} />
                    <Bar dataKey="value" fill={theme.cyan} radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        <div className={`p-6 rounded-2xl shadow lg:row-span-2 h-[400px] ${isDark ? "bg-gray-800" : "bg-white"}`}>
          <h2 className={`text-2xl font-bold mb-2 ${isDark ? "text-gray-100" : "text-gray-900"}`}>Income Statistics</h2>
          <p className={`text-xl ${isDark ? "text-gray-300" : "text-gray-500"} mb-2`}>Monthly Increase</p>
          <p className={`text-2xl font-bold mb-4 ${isDark ? "text-gray-100" : "text-gray-900"}`}>67,842</p>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={incomeData}>
                <XAxis dataKey="month" stroke={theme.axis} tick={{ fill: theme.subText }} />
                <YAxis stroke={theme.axis} tick={{ fill: theme.subText }} />
                <Tooltip {...tooltipProps} />
                <Legend wrapperStyle={{ color: theme.subText }} />
                <Line type="monotone" dataKey="register" stroke={theme.purple} strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="premium" stroke={theme.teal} strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <h1 className={`text-3xl font-bold text-center ${isDark ? "text-gray-100" : "text-gray-900"}`}>Sales Statistics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className={`p-6 rounded-2xl shadow h-[400px] ${isDark ? "bg-gray-800" : "bg-white"}`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className={`text-2xl font-bold ${isDark ? "text-gray-100" : "text-gray-900"}`}>Overall Sales</h3>
            <span className={`text-xl ${isDark ? "text-gray-300" : "text-gray-500"}`}>Last 30 days</span>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pieData} dataKey="value" outerRadius={120} label>
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip {...tooltipProps} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className={`flex justify-around mt-4 text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>
            <div>Gross Sales <b>492</b> <span className="text-green-500">+0.5%</span></div>
            <div>Purchases <b>87k</b> <span className="text-green-500">+0.8%</span></div>
            <div>Tax Return <b>882</b> <span className="text-red-500">-0.4%</span></div>
          </div>
        </div>

        <div className={`p-6 rounded-2xl shadow h-[400px] ${isDark ? "bg-gray-800" : "bg-white"}`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className={`text-2xl font-bold ${isDark ? "text-gray-100" : "text-gray-900"}`}>Sales Statistics</h3>
            <span className={`text-xl ${isDark ? "text-gray-300" : "text-gray-500"}`}>Last 7 days</span>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <XAxis dataKey="year" stroke={theme.axis} tick={{ fill: theme.subText }} />
                <YAxis stroke={theme.axis} tick={{ fill: theme.subText }} />
                <Tooltip {...tooltipProps} />
                <Legend wrapperStyle={{ color: theme.subText }} />
                <Bar dataKey="sales" fill={theme.purple} />
                <Bar dataKey="orders" fill={theme.orange} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className={`p-4 rounded-2xl shadow h-72 ${isDark ? "bg-gray-800" : "bg-white"}`}>
          <h3 className={`text-2xl font-bold ${isDark ? "text-gray-100" : "text-gray-900"}`}>Total Expenses</h3>
          <p className={`text-xl ${isDark ? "text-gray-100" : "text-gray-900"}`}>8742</p>
          <div className="h-32">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={expensesData}>
                <Tooltip {...tooltipProps} />
                <Bar dataKey="value" fill={theme.purple} radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className={`pt-4 rounded-2xl shadow h-72 ${isDark ? "bg-gray-800" : "bg-white"}`}>
          <div className="p-4">
            <h3 className={`text-2xl font-bold ${isDark ? "text-gray-100" : "text-gray-900"}`}>Total Budget</h3>
            <p className={`text-xl ${isDark ? "text-gray-100" : "text-gray-900"}`}>47,840</p>
          </div>
          <div className="h-32 p-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={budgetData}>
                <Tooltip {...tooltipProps} />
                <Bar dataKey="value" fill={theme.green} radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className={`p-6 rounded-2xl shadow h-72 ${isDark ? "bg-gray-800" : "bg-white"}`}>
          <h3 className={`text-2xl font-bold ${isDark ? "text-gray-100" : "text-gray-900"}`}>Total Balance</h3>
          <p className={`text-xl ${isDark ? "text-gray-100" : "text-gray-900"}`}>$7,243</p>
          <div className="h-32">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={balanceData}>
                <Tooltip {...tooltipProps} />
                <Bar dataKey="value" fill={theme.red} radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
