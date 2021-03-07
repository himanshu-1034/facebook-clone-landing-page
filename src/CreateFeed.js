import './CreateFeed.css';
import React, { useState } from 'react'
import { Avatar } from '@material-ui/core';
import { InsertEmoticon, PhotoLibrary, Videocam } from '@material-ui/icons';
import { useStateValue } from './contextProvider';
import { database } from './firebase';
import firebase from 'firebase';
export default function CreateFeed() {

    const [input,setInput] = useState("");
    const [imageUrl, setimageUrl] = useState("");
    const [{user},dispatch] = useStateValue();
    

    const handleSubmit = (e)=>{
        e.preventDefault();

        database.collection('posts').add({
            message:input,
            image:imageUrl,
            profilePic:user.photoURL,
            username:user.displayName,
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
        });

        setInput("");
        setimageUrl("");
    }


    return (
        <div className="createFeed">
            <div className="createFeed_top">
                <Avatar src={user.photoURL}/>
                <form>
                    <input className="createFeed_input" placeholder={`What's on your mind ${user.displayName} ?`}  value={input} onChange={(e)=>setInput(e.target.value)}/>
                    <input className="createFeed_imageurl" placeholder="Image URL (Optional)" value={imageUrl} onChange={(e)=>setimageUrl(e.target.value)} />
                    <button type="submit" onClick={handleSubmit}>Submit</button>
                </form>
            </div>
            <div className="createFeed_bottom">
                <div className="createFeed_option">
                    <Videocam style={{color:"red"}}/>
                    <h3>Live Video</h3>
                </div>
                <div className="createFeed_option">
                    <PhotoLibrary style={{color:"green"}}/>
                    <h3>Photo/Video</h3>
                </div>
                <div className="createFeed_option">
                    <InsertEmoticon style={{color:"orange"}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}
