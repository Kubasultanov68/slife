import React from "react";
import {Avatar} from "@mui/material";
import {CiSettings} from "react-icons/ci";
import {FaAngleDown} from "react-icons/fa";

export default () => {
    return (
        <div className='profile'>
            <div className='profile__user'>

                <div className="profile__user-left">
                    <Avatar src='' className='profile__user-avatar' style={{width: '150px', height: '150px'}}/>
                    <div className="profile__user-info">
                        <h3 className='profile__user-name'>Amv Mino</h3>

                    </div>
                </div>

                <div className="profile__user-right">
                    <button className="profile__user-btn">
                        Редактировать профиль
                    </button>
                    <button className="profile__user-btn">
                        Ещё
                        <FaAngleDown className='profile__user-btn_icon'/>
                    </button>
                </div>

            </div>
            <div className="profile__row">

            </div>
        </div>
    )
};