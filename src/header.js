import React from 'react'
import './header.css';
import Facebook from './images/facebook.png';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleRoundedIcon from '@material-ui/icons/SupervisedUserCircleRounded';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
export default function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <img src={Facebook} alt=""/>
                <div className="header_input">
                    <SearchIcon/>
                    <input type="text" placeholder="search facebook"/>
                </div>
            </div>
            <div className="header_middle">
                <div className="header_option header_option-active">
                    <HomeIcon fontSize="large"/>
                </div>
                <div className="header_option">
                    <FlagIcon fontSize="large"/>
                </div>
                <div className="header_option">
                    <SubscriptionsOutlinedIcon fontSize="large"/>
                </div>
                <div className="header_option">
                    <StorefrontOutlinedIcon fontSize="large"/>
                </div>
                <div className="header_option">
                    <SupervisedUserCircleRoundedIcon fontSize="large"/>
                </div>
            </div>
            <div className="header_right">
                <div className="header_info">
                    <Avatar/>
                    <h4>himanshu1034</h4>
                </div>
                <IconButton>
                    <AddIcon/> 
                </IconButton>
                <IconButton>
                    <ForumIcon/> 
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon/> 
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon/>
                </IconButton>
            </div>
        </div>
    )
}
