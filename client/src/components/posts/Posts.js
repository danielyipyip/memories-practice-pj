import React from 'react'
import Post from './post/Post'
import useStyles from './styles'
import {useSelector, useDispatch} from 'react-redux'
import { getPost, fetchPost } from "../redux/posts/postAction";
import { useEffect } from "react"; 

function Posts() {
    const classes = useStyles();

    const posts = useSelector(state => state.post.data);
    const dispatch = useDispatch();
    console.log(posts);
    useEffect( ()=>{
        dispatch(getPost());
    }, [])
    console.log(posts);
  return (
      <>
        <div>Posts</div>
        <Post />
        <Post />
      </>
    
  )
}

export default Posts