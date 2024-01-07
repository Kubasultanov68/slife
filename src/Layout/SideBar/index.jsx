import React from "react";
import {Link, NavLink} from "react-router-dom";
import {IoHomeOutline} from "react-icons/io5";
import {RiMessengerLine} from "react-icons/ri";
import {HiOutlineUserGroup} from "react-icons/hi";
import {LiaUserFriendsSolid} from "react-icons/lia";
import {MdOutlineExplore} from "react-icons/md";
import {CiHeart, CiSettings, CiUser} from "react-icons/ci";
import {FaRegUser} from "react-icons/fa";

export default () => {
    return (
        <div className='sidebar'>
            <div className='sidebar__links'>
                <NavLink to='/' className='sidebar__link'>
                    <IoHomeOutline className='sidebar__link-icon'/>
                    Главная
                </NavLink>
                <NavLink to='/myusername' className='sidebar__link'>
                    <CiUser className='sidebar__link-icon'/>
                    Мой профиль
                </NavLink>
                <NavLink to='/message' className='sidebar__link'>
                    <RiMessengerLine className='sidebar__link-icon'/>
                    Сообщения
                </NavLink>
                <NavLink to='/friends' className='sidebar__link'>
                    <LiaUserFriendsSolid className='sidebar__link-icon'/>
                    Друзья
                </NavLink>
                <NavLink to='/groups' className='sidebar__link'>
                    <HiOutlineUserGroup className='sidebar__link-icon'/>
                    Сообщества
                </NavLink>
                <NavLink to='/explore' className='sidebar__link'>
                    <MdOutlineExplore className='sidebar__link-icon'/>
                    Интересное
                </NavLink>
                <NavLink to='/favorites' className='sidebar__link'>
                    <CiHeart className='sidebar__link-icon'/>
                    Избранное
                </NavLink>
                <NavLink to='/settings' className='sidebar__link'>
                    <CiSettings className='sidebar__link-icon'/>
                    Настройки
                </NavLink>
            </div>
        </div>
    )
};
