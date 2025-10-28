import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/navbar';

function Layout() {
  return (
    <div className="relative">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;