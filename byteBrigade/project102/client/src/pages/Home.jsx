import React from "react";
import {Link, useLocation} from "react-router-dom"
import axios from 'react'
import { useState } from 'react'
import { useEffect } from "react";

const Home = () => {
  const [posts,setPosts] = useState([])
  
  const cat = useLocation().search;
  
  //create data because we can't create async data by default.....
  useEffect(()=>{
    const fetchData = async()=>{
        try{
          const res = await axios.get(`/posts${cat}`);
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
    title: "Oxfam International",
    desc: "Oxfam is a global movement of people, working together to end the injustice of poverty. That means we tackle the inequality that keeps people poor. Together, we save, protect and rebuild lives when disaster strikes. ",
    img: "https://www.borgenmagazine.com/wp-content/uploads/2016/02/Oxfam-International_opt.jpg"},
  {
    id: 2,
    title: "Save the Children",
    desc: "Our founder Eglantyne Jebb saw children dying of starvation and wracked with disease after the end of the First World War. So, in 1919, she launched the Save the Children Fund to raise much-needed funds to end children’s suffering across war-torn Europe.",
    img: "https://jobinbd.com/wp-content/uploads/2021/02/SAve-the-Children-Jobs.jpg",
  },
  {
    id: 3,
    title: "World vision international",
    desc: "Together we've impacted the lives of over 200 million vulnerable children by tackling the root causes of poverty.Over the last ten years, 89% of the severely malnourished children we treated made a full recovery.",
    img: "https://jsis.washington.edu/wordpress/wp-content/uploads/2015/07/Kent-Hill-feature.jpg",
  },
  {
    id: 4,
    title: "Greenpeace International",
    desc: "Greenpeace is an independent global campaigning network, founded in Canada in 1971 by Irving Stowe and Dorothy Stowe, immigrant environmental activists from the United States. Greenpeace states its goal is to ensure the ability of the Earth to nurture life in all its diversity and focuses its campaigning on worldwide issues such as climate change, deforestation, overfishing, commercial whaling, genetic engineering, and anti-nuclear issues.",
    img: "https://www.greenpeace.org/static/planet4-southeastasia-stateless/2019/04/d54a6eb1-d54a6eb1-gp01.jpg",
  },
];

  return (
    <>

    <div className="home">
      <div className="posts">
        {post1.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );

};

export default Home;