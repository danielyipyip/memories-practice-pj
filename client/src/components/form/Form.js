import React, {useState} from 'react'
import {TextField, Button, Typography, Paper} from '@mui/material'
import useStyles from "./styles"
import FileBase from 'react-file-base64'
import {useSelector, useDispatch} from 'react-redux'
import {postPost} from '../redux/posts/postAction'

function Form(props) {
  const classes = useStyles();

  const initialPostData = {    
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  }

  const [postData, setPostData] = useState(initialPostData);
  const dispatch = useDispatch();

  const handleChange = evt =>{
    // console.log(evt)
    // console.log(evt.target)
    // console.log(evt.target.name)
    setPostData(prev => {
      return {...prev, [evt.target.name]: evt.target.value}
    })
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    console.log(postData);
    dispatch(postPost(postData))
    clear();
  }

  const clear = () => {setPostData(initialPostData);}

  return (
    <Paper className={classes.paper}>
      Form
      <form className={classes.form+" "+classes.root} autoComplete='off' noValidate onSubmit={handleSubmit}>
        <Typography variant='h6'>{props.currentId}</Typography>
        <TextField variant='outlined' value={postData.creator} onChange={evt => handleChange(evt)} name="creator" label="Creator" fullWidth />
        <TextField variant='outlined' value={postData.title} onChange={evt => handleChange(evt)} name="title" label="Title" fullWidth />
        <TextField variant='outlined' value={postData.message} onChange={evt => handleChange(evt)} name="message" label="Message" fullWidth />
        <TextField variant='outlined' value={postData.tags} onChange={
          evt => setPostData(prev => {return {...prev, tags: evt.target.value.split(' ')}})} name="tag" label="Tag" fullWidth />
        <div className={classes.fileInput}>
          <FileBase type='file' multiple={false} onDone={
            ({base64}) => setPostData(prev => {return {...prev, selectedFile: base64}})}></FileBase>
        </div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  )
}

export default Form