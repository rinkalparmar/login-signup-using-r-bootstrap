import React from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

function Sbar() {
    return (
        <>
            <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial', zIndex: 9999 }} >
                <CDBSidebar textColor="#fff" backgroundColor="#333" >
                    <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                        <a href="/home" className="text-decoration-none" style={{ color: 'inherit' }}>
                            Sidebar
                        </a>
                    </CDBSidebarHeader>

                    <CDBSidebarContent className="sidebar-content">
                        <CDBSidebarMenu>
                            <NavLink to="/home" >
                                <CDBSidebarMenuItem icon="columns">Home</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink to="/about" >
                                <CDBSidebarMenuItem icon="table">About Us</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink to="/contact" >
                                <CDBSidebarMenuItem icon="user">Contact Us</CDBSidebarMenuItem>
                            </NavLink>
                        </CDBSidebarMenu>
                    </CDBSidebarContent>

                    <CDBSidebarFooter style={{ textAlign: 'center' }}>
                        <div
                            style={{
                                padding: '20px 5px',
                            }}
                        >
                            Sidebar Footer
                        </div>
                    </CDBSidebarFooter>
                </CDBSidebar>
            </div >
        </>
    );
}

export default Sbar;