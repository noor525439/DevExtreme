
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Tasks from "./Tasks";

const componentsConfig = [
  {
    name: "Dashboard",
    path: "/",
    icon: "LayoutDashboard",
    element: <Dashboard/>,
  },
  {
    name: "Users",
    icon: "Users",
    path: "/examples",
    children: [
      {
        name: "User List",
        path: "/userList",
         
      },
      {
        name: "Add User",
        path: "/addUser",
      
      },
    ],
  },
  {
    name:"Modules",
    icon:"Layers",
    path:"/fire",

      children:[
      {
        name:"Update1",
        path: "/fire/update1"
        
      },
      {
        name:"Create1",
        path: "/fire/create1"
      }
    ]
  },
    {
    name:"SubModules",
    icon:"Grid",
    path:"/fame",

    children:[
      {
        name:"Update2",
        path: "/fame/update2"
        
      },
      {
        name:"Create2",
        path: "/fame/create2"
      }
    ]
  },
    {
    name:"Companies",
    icon:"Building2",
    path:"/car",

    children:[
      {
        name:"Update3",
        path: "/car/update3"
        
      },
      {
        name:"Create3",
        path: "/car/create3"
      }
    ]
  },
   
   {
    name:"Departments",
    icon:"GitBranch",
    path:"/Divo",

    children:[
      {
        name:"Update4",
        path: "/Divo/update4"
        
      },
      {
        name:"Create4",
        path: "/Divo/create4"
      }
    ]
  },
   {
    name:"Accounting",
    icon:"BookOpen",
    path:"/Shield",

    children:[
      {
        name:"Update5",
        path: "/Shield/update5"
        
      },
      {
        name:"Create5",
        path: "/Shield/Create5"
      }
    ]
  },
   {
    name:"Tax",
    icon:"Percent",
    path:"/Flash",


    children:[
      {
        name:"update6",
        path: "/Flash/update6"
        
      },
      {
        name:"Create6",
        path: "/Flash/create6"
      }
    ]
  },
  {
    name:"Suppliers",
    icon:"Truck",
    path:"/Fandom",

    children:[
      {
        name:"Update7",
        path: "/Fandom/update7"
        
      },
      {
        name:"Create7",
        path: "/Fandom/create7"
      }
    ]
  },
    {
    name:"Supplier Inv... ",
    icon:"FileText",
    path:"/Splash",

    children:[
      {
        name:"Update8",
        path: "/Splash/update8"
        
      },
      {
        name:"Create8",
        path: "/Splash/create8"
      }
    ]
  },
    {
    name:"Report",
    icon:"BarChart3",
    path:"/Court",

    children:[
      {
        name:"Update9",
        path: "/Court/update9"
        
      },
      {
        name:"Create9",
        path: "/Court/create9"
      }
    ]
  },
    {
    name:"Unit Master",
    icon:"Package",
    path:"/Wisdon",

    children:[
      {
        name:"Update10",
        path: "/Wisdon/update10"
        
      },
      {
        name:"Create10",
        path: "/Wisdon/create10"
      }
    ]
  },
    {
    name:"Unit List",
    icon:"List",
    path:"/Criteria",

    children:[
      {
        name:"Update11",
        path: "/Criteria/update11"
        
      },
      {
        name:"Create11",
        path: "/Criteria/create11"
      }
    ]
  },
  {
    name:"Product",
    icon:"ShoppingCart",
    path:"/Fishy",

    children:[
      {
        name:"Update12",
        path: "/Fishy/update12"
        
      },
      {
        name:"Create12",
        path: "/Fishy/create12"
      }
    ]
  },

  {
    name:"Master Data",
    icon:"Database",
    path:"/Cone",

    children:[
      {
        name:"Update13",
        path: "/Cone/update13"
        
      },
      {
        name:"Create13",
        path: "/Cone/create13"
      }
    ]
  },

  {
    name:"Bank",
    icon:"Banknote",
    path:"/Bat",

    children:[
      {
        name:"Update14",
        path: "/Criteria/update14"
        
      },
      {
        name:"Create14",
        path: "/Bat/create14"
      }
    ]
  },

  {
    name:"Payment",
    icon:"Wallet",
    path:"/Curious",

    children:[
      {
        name:"Update15",
        path: "/Curious/update15"
        
      },
      {
        name:"Create15",
        path: "/Curious/create15"
      }
    ]
  },
    {
    name:"Stock Location",
    icon:"MapPin",
    path:"/Curi",

    children:[
      {
        name:"Update15",
        path: "/Curi/update16"
        
      },
      {
        name:"Create15",
        path: "/Curi/create16"
      }
    ]
  },


  
];
export default componentsConfig;
