import './Post.css';
import React from 'react'
import { Avatar } from '@material-ui/core';
import { AccountCircle, ChatBubbleOutline, ExpandMoreOutlined, NearMe, ThumbsUpDown, ThumbUp } from '@material-ui/icons';

export default function Post({profilePic,image,username,timestamp,message}) {
    return (
        <div className="post">
            <div className="post_top">
                <Avatar src={profilePic} className="post_avatar"/>
                <div className="post_top-info">
                    <h3>{username}</h3>
                    {/* <p>{new Date(timestamp?.toDate()).toUTCString()}</p> */}
                    <p>{timestamp}</p>
                </div>
            </div>
            <div className="post_bottom">
                <p>{message}</p>
                
            </div>
            <div className="post_image">
                <img src={image} alt=""/>
            </div>
            <div className="post_options">
                <div className="post_option">
                    <ThumbUp/>
                    <p>Like</p>
                </div>
                <div className="post_option">
                    <ChatBubbleOutline/>
                    <p>Comment</p>
                </div>
                <div className="post_option">
                    <NearMe/>
                    <p>Share</p>
                </div>
                <div className="post_option">
                    <AccountCircle/>
                    <ExpandMoreOutlined/>
                </div>
            </div>
        </div>
    )
}
