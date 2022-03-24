import postModel from "../models/postModel.js";

export const getPost = async (req, res) => {
    try{
        const posts = await postModel.find();
        res.status(200).json(posts);
    }catch (err){
        res.status(404).json({message: err})
    }
    res.send("working");
}

export const createPost = async (req, res) => {
    const data = req.body;
    const newPost = new postModel(data);
    try{
        await newPost.save();
        res.status(201).json(newPost);
    }catch (err){
        res.status(400).json({message: err})
    }
}