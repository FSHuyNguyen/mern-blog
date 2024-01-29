import express from 'express';
import { createComment, getPostComments,likeComment } from '../controllers/comment.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create',verifyToken,createComment);
router.get('/get_post_comments/:postId',getPostComments);
router.put('/like_comment/:commentId',verifyToken,likeComment);

export default router