import React from 'react'
import Post from './post/Post'
import useStyle from './styles'

function Posts() {
    const classes = useStyle();
  return (
      <>
        <div>Posts</div>
        <Post />
        <Post />
      </>
    
  )
}

export default Posts