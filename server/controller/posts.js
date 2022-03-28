import postModel from "../models/postModel.js";
import mongoose from "mongoose";

export const getPost = async (req, res) => {
    try{
        const posts = await postModel.find();
        return res.status(200).json(posts);
    }catch (err){
        return res.status(404).json({message: err})
    }
}

export const createPost = async (req, res) => {
    const data = req.body;
    const newPost = new postModel(data);
    try{
        await newPost.save();
        return res.status(201).json(newPost);
    }catch (err){
        return res.status(400).json({message: err})
    }
}

export const updatePost = async(req, res) => {
    const {id} = req.params;
    const data = req.body;
    mongoose.isValidObjectId(id)
    .then(
        ()=>{
            postModel.findByIdAndUpdate(id, {...data, id}, {new: true})
            .then( post => res.status(200).json(post) )
            .catch(err => res.send(400).json({message: err}))
        }
    )
    .catch(err => res.send(404).json({message: err}))
}