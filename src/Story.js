import './Story.css';
import React from 'react'
import { Avatar } from '@material-ui/core';

export default function Story({image,profileSrc,title}) {
    return (
        <div className="story" style={{backgroundImage:`url(${image})`}}>
            <Avatar src={profileSrc} className="story_avatar"/>
            <h4 className="story_title">{title}</h4>
        </div>
    )
}
