import Header from "./Header";
import Sidebar from "./SideBar"


const Layout = () => {
    return(
        <div className="layout">
            <Header/>
           <div className="layout-body">
             <Sidebar/>
           </div>
        </div>
    );
};

export default Layout;