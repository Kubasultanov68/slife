import React from "react";
import {Avatar, Menu, MenuItem} from "@mui/material";
import {CiLogout, CiSettings} from "react-icons/ci";
import {MdOutlineLightMode} from "react-icons/md";
import {SlLogout} from "react-icons/sl";

export default () => {

    const [elMenu, setMenuEl] = React.useState(null)
    const open = Boolean(elMenu)

    const handleClick = e => setMenuEl(e.currentTarget)
    const handleClose = () => setMenuEl(null)


    return (
        <div className="header__auth">
            <Avatar
                src=''
                className='header__auth-avatar'
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            />
            <Menu
                id="basic-menu"
                anchorEl={elMenu}
                open={open}
                className='header__auth-menu'
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <div
                    className='header__auth-item user'
                    onClick={handleClose}
                >
                    <Avatar src='' className='header__auth-avatar mini'/>
                    <div className='header__auth-column'>
                        <p className="header__auth-username">
                            KUba12
                        </p>
                        <p className='header__auth-email'>
                            kubasultanov@gmail.com
                        </p>
                    </div>
                </div>
                <div className='header__auth-item'>
                    <CiSettings className='header__auth-item_icon'/>
                    Настройки
                </div>
                <div className='header__auth-item mode'>
                    <MdOutlineLightMode className='header__auth-item_icon'/>
                    Тема: <select className='header__auth-item_select'>
                    <option className='header__auth-item_option'>Дневная</option>
                    <option className='header__auth-item_option'>Ночная</option>
                    <option className='header__auth-item_option'>Системная</option>
                </select>
                </div>
                <div className='header__auth-item'>
                    <CiLogout className='header__auth-item_icon'/>
                    Выйти
                </div>
            </Menu>
        </div>
    )
};
