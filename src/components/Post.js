import env from "react-dotenv";
import { useState, useEffect } from 'react';
import '../App.css';

function Post() {

    // const [user, setUser] = useState();
    const [post, setPost] = useState([{
      username: '',
      image: ''
    }]);
  
    useEffect(() => {
      fetchPhotos();
    }, [])
  
    
    // const axios = require('axios');
    // async function doGetRequest() {
    //   let res = await axios.get(env.MONGO_URI_PICS);
    //   let data = res.data;
    //   console.log(data);
    // }
    // doGetRequest();


    // const fetchPhotos = async () => {
    //   const res = await fetch(env.MONGO_URI_ONE);
    //   const data = await res.json();
    //   setPost(data);
    //   console.log(data);
    // };


    axios.get('/post')
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });



  return (
    <post className='post-container'>
        <div className='post-img'>
            {post.map((item, index) => {
                return(
                <div className='post-main'>
                    <h2 id='heading2'>{item.author}</h2>
                    <img 
                    className='photo-container'
                    src={item.image}
                    alt="random"/>
                </div>
                );
            })}
            </div>
    </post>
  );
}

export default Post;

