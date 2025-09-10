import Dashboard from "./Dashboard";
import Modules from "./Modules";

const componentsConfig = [
  {
    name: "Dashboard",
    path: "/",
    icon: "LayoutDashboard",
    element: <Dashboard />,
  },
  {
    name: "Users",
    icon: "Users",
    path: "/examples",
    children: [
      {
        name: "User List",
        path: "/userList",   // fixed ✅
        element: <Modules />,
      },
      {
        name: "Add User",
        path: "/addUser",   // fixed ✅
        element: <Modules />,
      },
    ],
  },
  {
    name: "Modules",
    icon: "Layers",
    path: "/Modules",   // fixed lowercase for consistency
    element: <Modules />,
  },
  {
    name: "SubModules",
    icon: "Grid",
    path: "/fame",
    children: [
      {
        name: "Update2",
        path: "/fame/update2",
        element: <Modules />,
      },
      {
        name: "Create2",
        path: "/fame/create2",
        element: <Modules />,
      },
    ],
  },
  {
    name: "Companies",
    icon: "Building2",
    path: "/car",
    children: [
      {
        name: "Update3",
        path: "/car/update3",
        element: <Modules />,
      },
      {
        name: "Create3",
        path: "/car/create3",
        element: <Modules />,
      },
    ],
  },
  {
    name: "Departments",
    icon: "GitBranch",
    path: "/divo",
    children: [
      {
        name: "Update4",
        path: "/divo/update4",
        element: <Modules />,
      },
      {
        name: "Create4",
        path: "/divo/create4",
        element: <Modules />,
      },
    ],
  },
  {
    name: "Accounting",
    icon: "BookOpen",
    path: "/shield",
    children: [
      {
        name: "Update5",
        path: "/shield/update5",
        element: <Modules />,
      },
      {
        name: "Create5",
        path: "/shield/create5",
        element: <Modules />,
      },
    ],
  },
  {
    name: "Tax",
    icon: "Percent",
    path: "/flash",
    children: [
      {
        name: "Update6",
        path: "/flash/update6",
        element: <Modules />,
      },
      {
        name: "Create6",
        path: "/flash/create6",
        element: <Modules />,
      },
    ],
  },
  {
    name: "Suppliers",
    icon: "Truck",
    path: "/fandom",
    children: [
      {
        name: "Update7",
        path: "/fandom/update7",
        element: <Modules />,
      },
      {
        name: "Create7",
        path: "/fandom/create7",
        element: <Modules />,
      },
    ],
  },
  {
    name: "Supplier Inv... ",
    icon: "FileText",
    path: "/splash",
    children: [
      {
        name: "Update8",
        path: "/splash/update8",
        element: <Modules />,
      },
      {
        name: "Create8",
        path: "/splash/create8",
        element: <Modules />,
      },
    ],
  },
  {
    name: "Report",
    icon: "BarChart3",
    path: "/court",
    children: [
      {
        name: "Update9",
        path: "/court/update9",
        element: <Modules />,
      },
      {
        name: "Create9",
        path: "/court/create9",
        element: <Modules />,
      },
    ],
  },
  {
    name: "Unit Master",
    icon: "Package",
    path: "/wisdon",
    children: [
      {
        name: "Update10",
        path: "/wisdon/update10",
        element: <Modules />,
      },
      {
        name: "Create10",
        path: "/wisdon/create10",
        element: <Modules />,
      },
    ],
  },
  {
    name: "Unit List",
    icon: "List",
    path: "/criteria",
    children: [
      {
        name: "Update11",
        path: "/criteria/update11",
        element: <Modules />,
      },
      {
        name: "Create11",
        path: "/criteria/create11",
        element: <Modules />,
      },
    ],
  },
  {
    name: "Product",
    icon: "ShoppingCart",
    path: "/fishy",
    children: [
      {
        name: "Update12",
        path: "/fishy/update12",
        element: <Modules />,
      },
      {
        name: "Create12",
        path: "/fishy/create12",
        element: <Modules />,
      },
    ],
  },
  {
    name: "Master Data",
    icon: "Database",
    path: "/cone",
    children: [
      {
        name: "Update13",
        path: "/cone/update13",
        element: <Modules />,
      },
      {
        name: "Create13",
        path: "/cone/create13",
        element: <Modules />,
      },
    ],
  },
  {
    name: "Bank",
    icon: "Banknote",
    path: "/bat",
    children: [
      {
        name: "Update14",
        path: "/bat/update14",   // fixed ✅
        element: <Modules />,
      },
      {
        name: "Create14",
        path: "/bat/create14",
        element: <Modules />,
      },
    ],
  },
  {
    name: "Payment",
    icon: "Wallet",
    path: "/curious",
    children: [
      {
        name: "Update15",
        path: "/curious/update15",
        element: <Modules />,
      },
      {
        name: "Create15",
        path: "/curious/create15",
        element: <Modules />,
      },
    ],
  },
  {
    name: "Stock Location",
    icon: "MapPin",
    path: "/curi",
    children: [
      {
        name: "Update16",
        path: "/curi/update16",   // fixed ✅
        element: <Modules />,
      },
      {
        name: "Create16",
        path: "/curi/create16",   // fixed ✅
        element: <Modules />,
      },
    ],
  },
];

export default componentsConfig;
