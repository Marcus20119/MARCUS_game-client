import { Outlet } from 'react-router-dom';
import Header from './Header/Header';

const MainLayout = () => {
  return (
    <div className="w-screen">
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
