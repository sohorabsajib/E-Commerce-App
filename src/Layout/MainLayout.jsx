
import Navbar from '../Components/Header/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Sidebar from '../Components/Header/Sidebar';

const MainLayout = () => {
    return (
        <div className='Max-w-[1300px] mx-auto'>
            <Navbar></Navbar>
            
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;