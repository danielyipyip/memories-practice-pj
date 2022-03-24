import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';


//set up app
const app = express();
app.use(express.json({limit: "15mb", extended: "true"}));
app.use(express.urlencoded({limit:"15mb", extended: "true"}));
app.use(cors());

//connect to DB
const MONGODB_URL = "mongodb+srv://admin-daniel:Danielyip@cluster0.iqbyh.mongodb.net/memoriesPractice?retryWrites=true&w=majority"
const PORT = process.env.PORT || 3000;
mongoose.connect(MONGODB_URL)
    .then( ()=>app.listen(PORT, ()=>console.log("Server started on "+PORT)) )
    .catch( err => console.log(err) )
