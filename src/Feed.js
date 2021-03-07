import './Feed.css';
import React from 'react'
import StoryReel from './StoryReel';
import CreateFeed from './CreateFeed';
import Post from './Post';

export default function Feed() {
    return (
        <div className="feed">
            <StoryReel/>
            <CreateFeed/>
            <Post 
            image="https://s3.scoopwhoop.com/anj/Chandler_Bing/921221156.jpg"
            message="test message"
            profilePic="https://th.bing.com/th/id/OIP.VkrZVzjxmYD0-t7LYLOogQHaHk?pid=ImgDet&rs=1"
            timestamp="test timestamp"
            username="Himanshu1034"
            />
             <Post 
            message="test message"
            profilePic="https://th.bing.com/th/id/OIP.VkrZVzjxmYD0-t7LYLOogQHaHk?pid=ImgDet&rs=1"
            timestamp="test timestamp"
            username="Himanshu1034"
            />
        </div>
    )
}
