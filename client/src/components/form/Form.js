import React from 'react'
import {TextField, Button, Typography, Paper} from '@mui/material'
import useStyles from "./styles"

function Form() {
  const classes = useStyles();

  const handleSubmit = async (evt) => {

  }

  return (
    <Paper>
      Form
      <form autoComplete='off' noValidate onSubmit={handleSubmit}>
        <Typography variant='h6'>{}</Typography>
        <TextField variant='outlined' value={1} onChange={()=>{;}} name="creator" label="Creator" fullWidth />
        
      </form>
    </Paper>
  )
}

export default Form