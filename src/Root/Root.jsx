import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const Root = () => {
    return (
        <div className="bg-gray-100">
            <Navbar/>
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};

export default Root;
