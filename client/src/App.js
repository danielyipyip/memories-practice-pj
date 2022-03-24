import React from "react";
import {AppBar, Container, Grow, Typography, Grid} from '@mui/material';

const App = () =>{
    return (
        <div>
        <Container max-width='lg'>
            <AppBar position='static' color='inherit'>
                <Typography variant='h2' align='center'>Memories</Typography>
                <img href='' alt='memories'></img>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify='space-between' alignItem='stretch' spacing='3'>
                        <Grid item xs={12} sm={7}>post</Grid>
                        <Grid item xs={12} sm={4}>form</Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
            
        </div>
    )
}

export default App;