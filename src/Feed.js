import './Feed.css';
import React, { useEffect, useState } from 'react'
import StoryReel from './StoryReel';
import CreateFeed from './CreateFeed';
import Post from './Post';
import { database } from './firebase';

export default function Feed() {

    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        database.collection('posts').orderBy("timestamp",'desc').onSnapshot(snapshot=>{
            setPosts(snapshot.docs.map(doc=>({
                id:doc.id,
                data:doc.data()
            })));
        });
    },[]);

    return (
        <div className="feed">
            <StoryReel/>
            <CreateFeed/>
            {/* <Post 
            image="https://s3.scoopwhoop.com/anj/Chandler_Bing/921221156.jpg"
            message="test message"
            profilePic="https://th.bing.com/th/id/OIP.VkrZVzjxmYD0-t7LYLOogQHaHk?pid=ImgDet&rs=1"
            timestamp="test timestamp"
            username="Himanshu1034"
            /> */}
            {
                posts.map((post)=>{
                    return <Post key={post.id} image={post.data.image} message={post.data.message} profilePic={post.data.profilePic} timestamp={post.data.timestamp} username={post.data.username}/>
                })
            }
        </div>
    )
}
