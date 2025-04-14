// components/AppLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sbar from './Sbar';
import NavbarMain from './NavbarMain';

const MainData = () => {
    return (
        <div className="d-flex my-5" >
            <Sbar />
            <div className="flex-grow-1">
                <NavbarMain />
                <div className="p-3">
                    <Outlet />
                    {/* <h1>hello rinkal</h1> */}
                </div>
            </div>
        </div>
    );
};

export default MainData;
