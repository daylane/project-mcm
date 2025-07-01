import { useState } from "react";
import Header from "./Header";
import Sidebar from "./SideBar"
import { Outlet } from "react-router";
import './style.css'



const Layout = () => {
     const [abrirSideBar, setAbrirSideBar] = useState(false);

     const toggleSideBar = () => {
        setAbrirSideBar(!abrirSideBar);
     };

    return(
        <div className="layout">
            <Header toggleSideBar={toggleSideBar}/>
           <div className="layout-body">
             <Sidebar abrirSideBar={abrirSideBar}/>
           </div>
           <div className="main-content">
          <Outlet />
        </div>
        </div>
    );
};

export default Layout;