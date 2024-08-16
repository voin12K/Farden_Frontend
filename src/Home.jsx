import { Routes, Route, useLocation  } from 'react-router-dom';
import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { MainMenu } from './components/MainMenu/MainMenu';

export const Home = () => {

    const location = useLocation();
    const hideNavbarPaths = ['/signup'];

    return(
        <>
        {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
        <Routes>
            <Route path='/' element={<MainMenu/>} />
        </Routes>
        </>
    );
}