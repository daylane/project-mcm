import { NavLink } from "react-router";
import './index.css'
import { Button } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { useState } from "react";

const items = [
    { name: 'Home', path: '/home'}
];

export default function Sidebar () {
     const [abrirSideBar, setAbrirSideBar] = useState(false);

     const toggleSideBar = () => {
        setAbrirSideBar(!abrirSideBar);
     };

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
