import React from 'react'
import useStyles from './styles'
import { Card, CardActions, CardContent, CardMedia, Button, Typography, ThumbIcon } from '@mui/material'

function Post({post, setCurrentId}) {
    const classes = useStyles();
    const defaultImg = 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png';
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile || defaultImg}/>
    </Card>
  )
}

export default Post