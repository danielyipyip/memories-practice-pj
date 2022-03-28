import React from 'react'
import useStyles from './styles'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material'
import {MoreHoriz, ThumbUpAlt, Delete} from '@mui/icons-material';
import moment from 'moment'

function Post({post, setCurrentId}) {
    const classes = useStyles();
    const defaultImg = 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png';
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile || defaultImg} title={post.title}/>
  {/* Creator + Date */}
      <div className={classes.overlay}>
        <Typography variant='h6'>{post.creator}</Typography>
        <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
      </div>
  {/* the 3 dot */}
      <div className={classes.overlay2}>
        <Button style={{color: 'white'}} size='small' onClick={()=>{var a=1}}><MoreHoriz fontSize='large'/></Button>
      </div>
  {/* tags */}
      <div className={classes.details}>
        <Typography variant='body2' color='textSecondary' component='h2'>{post.tags.map(tag=>'#'+tag+' ')}</Typography>
      </div>
  {/* title & content */}
      <Typography className={classes.title} gutterBottom variant='h5' component='h2'>{post.title}</Typography>
      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>{post.message}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size='small' color='primary' onClick={()=>(1)}><ThumbUpAlt fontSize='small'/>Like {post.likeCount}</Button>
        <Button size='small' color='primary' onClick={()=>(1)}><Delete fontSize='small'/>Delete</Button>
      </CardActions>
    </Card>
  )
}

export default Post