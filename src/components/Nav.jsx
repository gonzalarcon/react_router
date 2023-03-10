import { Link, Outlet } from 'react-router-dom'
import { GiCakeSlice } from 'react-icons/gi';
import { FcAddressBook, FcHome } from "react-icons/fc";
import React from 'react';



export const Nav = () => {
    return (
        <>
                <ul>
                    <li><Link to="/"> <FcHome/> Home </Link></li>    
                    <li><Link to="/contact"> <FcAddressBook/> Contacto </Link></li>
                    <div className='pageName'>
                        <GiCakeSlice />
                        <p>Happy Cake</p>
                    </div>
                </ul>    
                <Outlet />           
        </>
    )
}
