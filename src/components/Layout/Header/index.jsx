import { Button, Typography } from "@mui/material";
import logo from "../../../assets/logo.svg"
import './index.css';
import { Menu } from "@mui/icons-material";


const Header = ({ toggleSideBar }) => {
    return(
        <header className="header">
            <div className="header-content">
                <button className="toggleButton" onClick={toggleSideBar}>
                    <Menu className="content"/>
                </button>
                <img src={logo} alt="logo" className="logo"/>
                <Typography className="header-text">
                    Meu Sistema
                </Typography>
            </div>
        </header>
    );
}
export default Header;