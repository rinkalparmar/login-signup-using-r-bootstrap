import React from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

let navigate = useNavigate();
function ProtectedRoute() {
    const isAuthenticate = localStorage.getItem("isAuthenticate");
    return isAuthenticate ? <Outlet /> : navigate("/login");
}

export default ProtectedRoute;
