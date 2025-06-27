import { useState } from "react";
import Header from "./Header";
import Sidebar from "./SideBar"


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
        </div>
    );
};

export default Layout;