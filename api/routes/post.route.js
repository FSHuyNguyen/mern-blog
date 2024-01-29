import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { create, getPosts, deletePost, updatePost } from '../controllers/post.controller.js';

const router = express.Router();

router.post('/create',verifyToken,create);
router.get('/get_posts',getPosts);
router.delete('/delete_post/:postId/:userId',verifyToken,deletePost);
router.put('/update_post/:postId/:userId',verifyToken,updatePost);

export default router