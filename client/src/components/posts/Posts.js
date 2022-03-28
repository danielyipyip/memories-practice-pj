import React, { useEffect } from 'react'
import Post from './post/Post'
import useStyles from './styles'
import { Grid, CircularProgress } from '@mui/material'

import {useSelector, useDispatch} from 'react-redux'
import { getPost } from "../redux/posts/postAction";

function Posts(props) {
    const classes = useStyles();

    const loading = useSelector(state => state.loading);
    const posts = useSelector(state => state.post.data);
  //need to fetch in App, why? (fetch here will cause infinite re-fetch)
  return (
        loading ? <CircularProgress />: (
          <Grid className={classes.container} container alignItems='stretch' spacing={3}>
            {posts.map(post => {
              return (
                <Grid key={post.id} item xs={12} sm={6}>
                  <Post post={post} setCurrentId={props.setCurrentId}/>
                </Grid>);
            })}       
          </Grid>
        )
  )
}

export default Posts