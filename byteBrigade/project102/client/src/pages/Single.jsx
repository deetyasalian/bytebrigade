import React from 'react'
import Edit from '../image/edit.png'
import Delete from '../image/delete.png'
import {Link, useLocation} from 'react-router-dom'
import Menu from '../components/Menu'
import { AuthContext } from '../context/authContext'
import axios from 'react'
import {  userContext } from 'react'
import { useEffect } from "react";
import moment from 'react';
import { useState } from 'react';
import{useNavigate} from 'react-router-dom'





const Single=()=>{

    const [post, setPosts] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const postId = location.pathname.split("/")[2];

    const {currentUser} = userContext(AuthContext)




    useEffect(()=>{
        const fetchData = async()=>{
            try{
              const res = await axios.get(`/posts${postId}`);
              setPosts(res.data)
          }
          catch(err){
            console.log(err)
          }
        }
        fetchData();
      },[postId]);


        const handleDelete = async ()=>{
            try{
                await axios.delete(`/posts/${postId}`);
                navigate('/')
            }
            catch(err){
console.log(err)
            }
        }
    return(
        <div className="single">
        <div className="content">
            <img src={post?.img} alt=''/>

            <img src="https://media.istockphoto.com/id/1199706305/photo/friends-linking-arms-in-unity.jpg?s=1024x1024&w=is&k=20&c=9BpVTL4rlz3fdl-V8vEgqIWyYyCFZOxdg93mkiAAdOg="/>
        <div className="user">
            {post.userImg && < img src={post.userImg} alt=''/> 
                     }
           <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"/>
        
        <div className="info">
            <span>Human Rights Foundation</span>
            <p>Posted on {moment(post.date).fromNow()}</p>
        </div>
       {currentUser.username===post.username && <div className="edit">
            <Link to={`/write?edit=2`}>
            <img src={Edit} alt=""/>
            </Link>
           
            <img onClick={handleDelete} src={Delete} alt=""/>
        </div>}
        </div>
       
     <h1>{post.title}</h1>
            {post.desc}
        <Menu cat={post.cat}/>
        </div>
        <Menu/>
        </div>
    )
}

export default Single