import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";


const Main = () => {
    return (
      <div>
       
          <Navbar></Navbar>
        
        <div className="min-h-[calc(100vh-306px)]">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default Main;