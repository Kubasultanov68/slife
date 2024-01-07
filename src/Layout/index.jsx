import React from "react";
import {Outlet} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./SideBar";

export default () => {
    return (
        <>
            <Header/>
            <div style={{height: '80px'}}></div>

            <main className='container main'>

                <SideBar/>
                <Outlet/>

            </main>

            <Footer/>
        </>
    )
};
