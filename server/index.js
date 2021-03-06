import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoute from './routes/posts.js'
import dotenv from 'dotenv'

dotenv.config()
//set up app
const app = express();
app.use(express.json({limit: "15mb", extended: "true"}));
app.use(express.urlencoded({limit:"15mb", extended: "true"}));
app.use(cors());

app.get('/', (req, res)=>res.send('Welcome to memories API'))
    //link routes
    app.use('/posts', postRoute);

//connect to DB
// const MONGODB_URL = "mongodb+srv://admin-daniel:Danielyip@cluster0.iqbyh.mongodb.net/memoriesPractice?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;
// app.listen(PORT, ()=>console.log("Server started on "+PORT))

mongoose.connect(process.env.CONNECTION_URL)
    .then( ()=>app.listen(PORT, ()=>console.log("Server started on "+PORT)) )
    .catch( err => console.log(err) )
