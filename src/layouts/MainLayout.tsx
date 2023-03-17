import { Outlet } from 'react-router-dom';
import RootModal from '~/components/Modal/RootModal';
import Header from './Header/Header';

const MainLayout = () => {
  return (
    <div className="w-screen">
      <Header />
      <Outlet />
      <RootModal />
    </div>
  );
};

export default MainLayout;
