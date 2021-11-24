import React, { useState } from 'react'

import "./post.css"
import { MoreVert , SmsOutlined } from "@material-ui/icons"
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {Users} from '../../../../Data'


export default function Post({post}) {

   const [like,setLike] = useState(post.like)
   const [islike,setIslike] = useState(false)

   const handler=()=>{
       setLike(islike? like-1:like+1 )
       setIslike(!islike)
       
       
   }
    return (
        <>
        <div className="postcontainer">
           <div className='postwrapper'>
               
          
            <div className="postTop">
                <div className="topleft">
                    <img className="images" src= {Users.filter((u)=> u.id === post.userId)[0].imagesProfile} alt="profile" />
                    <span className="names"> {Users.filter((u)=> u.id === post.userId)[0].userName} </span>
                    <span className="dates"> {post.date}</span>
                    
                </div>
                <div className="topzRight">
                <MoreVert />
                </div>
                
            </div>
            <div className="postcenter">
                
               <span className='text'>{post.descrip}</span>
               <img className="imagepost" src={post.imagesPost} alt="newpost" />

            </div>
            <div className="postbotton">
                <div className="postbottonLeft">
                <LocationOnIcon     className="icon" />
                <FavoriteIcon   className={islike ?  'show': 'icon'} onClick={handler}/>
               
                <span className='counter' > {like} People liked it</span>
                </div>
                <div className="postbottonRight">
                <span>{post.comment} comments</span>
                <SmsOutlined className="iconcomment" />
                </div>
      
            </div>
            </div> 
        </div>
        </>
    )
}
