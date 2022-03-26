import React from 'react'
import Post from './post/Post'
import useStyles from './styles'

function Posts() {
    const classes = useStyles();
  return (
      <>
        <div>Posts</div>
        <Post />
        <Post />
      </>
    
  )
}

export default Posts