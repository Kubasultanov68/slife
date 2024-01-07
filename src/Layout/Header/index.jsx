import React from "react";
import {Link} from "react-router-dom";
import {CiHeart, CiSearch} from "react-icons/ci";
import {IoIosNotificationsOutline} from "react-icons/io";
import logo from '../../assets/logo.svg';
import HeaderAuth from './HeaderAuth'

export default () => {
    return (
        <header className='header'>
            <div className="container">
                <nav className="header__nav">
                    <div className="header__left">
                        <Link to='/' className='header__logo'>
                            <img src={logo} alt="logo"/>
                            SLife
                        </Link>
                        <div className='header__search'>
                            <CiSearch className='header__search-icon'/>
                            <input type="text" className='header__search-input' placeholder='Поиск...'/>
                        </div>
                    </div>
                    <div className="header__right">
                        <div className="header__btns">
                            <button className="header__btn">
                                <IoIosNotificationsOutline className='header__btn-icon'/>
                            </button>
                            <button className="header__btn">
                                <CiHeart className='header__btn-icon'/>
                            </button>
                        </div>
                        <HeaderAuth/>
                    </div>
                </nav>
            </div>
        </header>
    )
};
