
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
];
export default componentsConfig;
