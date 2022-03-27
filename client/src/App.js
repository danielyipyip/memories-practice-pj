import React, {useState} from "react";
import {AppBar, Container, Grow, Typography, Grid} from '@mui/material';
import Posts from "./components/posts/Posts.js"
import Form from "./components/form/Form.js"
import useStyles from './styles'



const App = () =>{
    const classes = useStyles();

    const [currentId, setCurrentId] = useState(0);

    return (
        <div>
        <Container max-width='lg'>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.heading} variant='h2' align='center'>Memories</Typography>
                <img className={classes.image} href='' alt='memories'></img>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify='space-between' alignItems='stretch' spacing='3'>
                        <Grid item xs={12} sm={7}><Posts /></Grid>
                        <Grid item xs={12} sm={4}><Form currentId={currentId} setCurrentId={setCurrentId}/></Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
            
        </div>
    )
}

export default App;