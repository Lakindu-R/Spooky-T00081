import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';

function Layout() {
  return (
    <div className="relative">
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
}

export default Layout;