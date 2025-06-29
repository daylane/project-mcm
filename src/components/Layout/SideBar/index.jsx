import { NavLink } from "react-router";
import './index.css'
import { BuildOutlined, Home, Settings } from "@mui/icons-material";
import { useState } from "react";

const items = [
    { name: 'Página Inicial', path: '/home', icon: <Home/>},
    { name: 'Cadastros', icon: <Settings/>,
         children: [
     {name: 'Empresa', icon: <BuildOutlined/>}
    ]}
];
 const Sidebar = ({ abrirSideBar }) => {

    const [openSubmenu, setOpenSubmenu] = useState(null);

    const toggleSubmenu = (name) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
    };


    return(
        <>
         <div>
             <nav className={`sidebar ${abrirSideBar ? "open" : ""}`}>
                {items.map(({ name, path, icon, children }) => (
                  <div className="tooltip-container" key={name}>
                   {path ? (
                     <NavLink
                    to={path}
                    className={({ isActive }) => `nav-link ${isActive ? "active" : ""}` }>
                    {icon}
                    {abrirSideBar && <span className="tooltip-text">{name}</span>}
                    </NavLink>
                   ) : (
                    <div className="nav-link active" onClick={() => toggleSubmenu(name)}>
                    {icon}
                    {abrirSideBar && <span className="tooltip-text">{name}</span>}
                    </div>
                   )}

                     {/* Submenu */}
                    {children && openSubmenu === name && abrirSideBar && (
                        <div className="submenu">
                        {children.map((child) => (
                            <NavLink key={child.path} to={child.path} className="nav-sublink">
                            <span>{child.name}</span>
                            </NavLink>
                        ))}
                        </div>
                    )}
                </div>
                ))}
             </nav>
        </div>
    </>
    );
}
export default Sidebar;