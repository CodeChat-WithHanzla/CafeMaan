import React, { useContext } from 'react';
import { AdminContext } from './context/AdminContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/login';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import { Route, Routes } from 'react-router';
import AllMenu from './pages/admin/AllMenus';
import AddMenu from './pages/admin/AddMenu';
import UpdateMenu from './pages/admin/UpdateMenu';

function App() {
  const { aToken } = useContext(AdminContext);
  return aToken ? (
    <div className="bg-[#F8F9FD]">
      <ToastContainer />
      <NavBar />
      <div className="flex items-start bg-[#121212]">
        <SideBar />
        <Routes>
          {/* Admin Routes */}
          <Route path='/' element={<></>} />
          <Route path='/admin-menus' element={<AllMenu />} />
          <Route path='/add-menu' element={<AddMenu />} />
          <Route path='/update-menu/:id' element={<UpdateMenu />} />

        </Routes>
      </div>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  );
}

export default App;