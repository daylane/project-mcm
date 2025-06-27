import { Button, Menu } from "@mui/material";
import logo from "../../../assets/logo.svg"
import './index.css';


export default function Header () {

    return(
        <header className="header">
            <div className="header-content">
                <img src={logo} alt="logo" className="logo"/>
                        <Button className="toggleSideBar">
                        <Menu color="#000000"/>
                    </Button>
            </div>
        </header>
    );
}