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

export const getAPost = async(req, res) => {
    const{id}=req.params
    try{
        const post = await postModel.findById(id);
        // console.log(post)
        return res.status(200).json(post);
    }catch(err){
        return res.status(401).json({message: err})
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
    if (!mongoose.isValidObjectId(id)) return res.status(404).json({message: 'cannot find the post'})
    postModel.findByIdAndUpdate(id, {...data, id}, {new: true})
    .then( post => res.status(200).json(post) )
    .catch(err => res.send(400).json({message: err}))
}

export const deletePost = async(req, res) => {
    const {id} = req.params;
    if (!mongoose.isValidObjectId(id)) return res.status(404).json({message: 'cannot find the post'})
    postModel.findByIdAndRemove(id)
    .then(() => res.status(200).json({message: 'Post deleted successfully'}))
    .catch(err => res.send(400).json({message: err}))
}

export const likePost = async(req, res) =>{
    const {id} = req.params;
    if (!mongoose.isValidObjectId(id)) return res.status(404).json({message: 'cannot find the post'})
    postModel.findById(id)
    .then(
        post => {
            post.likeCount = post.likeCount+1;
            post.save()
            .then(res.status(200).json(post))
            .catch(err => res.send(400).json({message: err}))
        }
    )
    .catch(err => res.send(400).json({message: err}))
}