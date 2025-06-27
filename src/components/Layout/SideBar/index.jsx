import { NavLink } from "react-router";
import './index.css'

const items = [
    { name: 'Home', path: '/home'}
];
 const Sidebar = ({ abrirSideBar }) => {

    console.log(abrirSideBar);
    return(
        <>
         <div>
             <nav className={`sidebar ${abrirSideBar ? "open" : ""}`}>
                {items.map(({ name, path }) => (
                    <NavLink
                    key={path}
                    to={path}
                    className={({ isActive}) => 
                    isActive ? 'nav-link  active' : 'nav-link'
                    }>
                    {name}
                    </NavLink>
                ))}
        </nav>
    </div>
    </>
    );
}
export default Sidebar;