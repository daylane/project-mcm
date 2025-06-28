import { NavLink } from "react-router";
import './index.css'
import { Home } from "@mui/icons-material";

const items = [
    { name: 'Página Inicial', path: '/home', icon: <Home/>}
];
 const Sidebar = ({ abrirSideBar }) => {
    return(
        <>
         <div>
             <nav className={`sidebar ${abrirSideBar ? "open" : ""}`}>
                {items.map(({ name, path, icon }) => (
                  <div className="tooltip-container" key={path}>
                    <NavLink
                    to={path}
                    className={({ isActive }) => `nav-link ${isActive ? "active" : ""}` }>
                    {icon}
                    {abrirSideBar && <span className="tooltip-text">{name}</span>}
                    </NavLink>
                </div>
                ))}
        </nav>
    </div>
    </>
    );
}
export default Sidebar;