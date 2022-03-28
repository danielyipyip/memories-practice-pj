import express from 'express';
import { getPost, createPost, updatePost, getAPost } from '../controller/posts.js';

const router = express.Router();

router.get('/:id/', getAPost)
router.get('/', getPost);
router.post('/', createPost);
router.patch('/:id/', updatePost)

export default router;