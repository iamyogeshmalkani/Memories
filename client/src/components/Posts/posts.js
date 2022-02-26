import React from 'react'
import { useSelector } from 'react-redux'
import Postcard from './postcard';
import Loading from '../loading/loading';



const  Posts = ({updateId})=> {
  
  var posts = null;
    posts = useSelector((state)=>state.posts)
    console.log(posts);
    if(posts!==null){
      return (
        <div className="postscontainer" >
          {posts.map((post)=>{
          return(
            <Postcard post={post} updateId={updateId} />
          )
        })}
    
        </div>
      );
    }
    else{
      return(
        <Loading />
      )

    }


 
    
   
  
};
export default Posts;