import { Routes, Route, useLocation  } from 'react-router-dom';
import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { MainVmeste } from './MainVmeste';
import { Login } from './components/Login/Login';
import { Addcloth } from './components/Addcloth/Addcloth';

export const Home = () => {

    const location = useLocation();
    const hideNavbarPaths = ['/signup'];

    return(
        <>
        {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
        <Routes>
            <Route path='/' element={<MainVmeste/>} />
            <Route path='Login' element={<Login/>} />
            <Route path='Addcloth' element={<Addcloth/>} />
        </Routes>
        </>
    );
}