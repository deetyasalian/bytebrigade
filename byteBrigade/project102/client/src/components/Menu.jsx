import React from 'react'
import axios from 'react'
import { useState } from 'react'
import { useEffect } from "react";

const Menu = ({cat}) => {
  const [posts,setPosts] = useState([])
  
  
  //create data because we can't create async data by default.....
  useEffect(()=>{
    const fetchData = async()=>{
        try{
          const res = await axios.get(`/posts/?cat=${cat}`);
          setPosts(res.data)
      }
      catch(err){
        console.log(err)
      }
    }
    fetchData();
  },[cat]);
  const post1 = [
    {
      id: 1,
      title: "Goonj",
      desc: "Goonj aims to build an equitable relationship of strength, sustenance, and dignity between the cities and villages, using under-utilized material as a tool to trigger development with dignity. We envision growing as an idea across regions, economies, and countries using urban surplus material as a tool to address basic but neglected issues of the financially and materially poor, involving them in designing and implementing their own solutions, with their own efforts, knowledge, and dignity, and material as a reward for their participation.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPdYG7jRQIElaLE-N9tEytoIJTN-pGqupAsA&usqp=CAU",
    },
    {
      id: 2,
      title: "IEEE",
      desc: "IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity. IEEE and its members inspire a global community through its highly cited publications, conferences, technology standards, and professional and educational activities.",
      img: "data:image/png;base64,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",
    },
    {
      id: 3,
      title: "Women Empowerment",
      desc: " empower women by providing them with skills training, entrepreneurship opportunities, or organizing workshops on gender equality and women's rights.",
      img: "https://assets-global.website-files.com/619e93b13a08062a0f45577f/649bfbdfc3f3cab32cb57a4f_day-care-gap_0%201%20(1).png",
    },
   
  ];
  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {post1.map(post=>(
        <div className="post" key={post.id}>
            <img src={post.img} alt=""/>
       <h2>{post.title}</h2>
       <button>Read More</button>
        </div>
      ))}
    </div>
  )
}

export default Menu
