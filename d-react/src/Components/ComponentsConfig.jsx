
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Tasks from "./Tasks";

const componentsConfig = [
  {
    name: "Home",
    path: "/",
    icon: "Home",
    element: <Dashboard/>,
  },
  {
    name: "Examples",
    icon: "Folder",
    path: "/examples",
    children: [
      {
        name: "Profile",
        path: "/Profile",
        element: <Profile />,
      },
      {
        name: "Tasks",
        path: "/Tasks",
        element: <Tasks/>,
      },
    ],
  },
  {
    name:"Fire",
    icon:"LogOut",
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
    name:"Fame",
    icon:"LogOut",
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
    name:"Car",
    icon:"LogOut",
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
    name:"Divo",
    icon:"LogOut",
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
    name:"Shield",
    icon:"LogOut",
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
    name:"Flash",
    icon:"LogOut",
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
    name:"Fandom",
    icon:"LogOut",
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
    name:"Splash",
    icon:"LogOut",
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
    name:"Court",
    icon:"LogOut",
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
    name:"Wisdon",
    icon:"LogOut",
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
    name:"Criteria",
    icon:"LogOut",
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
    name:"Fishy",
    icon:"LogOut",
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
    name:"Cone",
    icon:"LogOut",
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
    name:"Bat",
    icon:"LogOut",
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
    name:"Curious",
    icon:"LogOut",
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


  
];
export default componentsConfig;
