import { Outlet } from "react-router-dom";
import Topmenu from "./components/Topmenu";
import Footer from "./components/Footer";
const Layout=()=>{
    return(
        <>
          <Topmenu/>

          <Outlet/>

          <Footer/>
        
        </>
    )
}

export default Layout;