import { Chat, EmojiFlags, ExpandMoreOutlined, LocalHospital, People, Storefront, VideoLibrary } from '@material-ui/icons';
import React from 'react'
import './sidebar.css';
import {useState} from 'react';
import SidebarRow from './sidebarRow';
export default function Sidebar() {


    return (
        <div className="sidebar">
            <SidebarRow src="q" title="Himanshu1034"/>
            <SidebarRow title="COVID-19 Information Center" Icon={LocalHospital}/>
            <SidebarRow title="pages" Icon={EmojiFlags}/>
            <SidebarRow title="Friends" Icon={People}/>
            <SidebarRow title="Messenger" Icon={Chat}/>
            <SidebarRow title="Marketplace" Icon={Storefront}/>
            <SidebarRow title="Videos" Icon={VideoLibrary}/>
            <SidebarRow title="Marketplace" Icon={ExpandMoreOutlined}/>
        </div>
    )
}
