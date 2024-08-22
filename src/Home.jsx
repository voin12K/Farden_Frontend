import { Routes, Route, useLocation  } from 'react-router-dom';
import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { MainVmeste } from './MainVmeste';

export const Home = () => {

    const location = useLocation();
    const hideNavbarPaths = ['/signup'];

    return(
        <>
        {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
        <Routes>
            <Route path='/' element={<MainVmeste/>} />
        </Routes>
        </>
    );
}