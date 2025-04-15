import React from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function ProtectedRoute() {
    let navigate = useNavigate();
    const isAuthenticate = localStorage.getItem("isAuthenticate");
    return isAuthenticate ? <Outlet /> : navigate("/login");
}

export default ProtectedRoute;
