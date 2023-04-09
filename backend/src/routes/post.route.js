const express = require('express');
const router = express.Router();

const { createPost,
    getPostById,
    updatePostById,
    deletePostById,
    likePostById,
    unlikePostById } = require('../controllers/post.controller')

router.post('/', createPost);
router.get('/:id', getPostById);
router.put('/:id', updatePostById);
router.delete('/:id', deletePostById);
router.post('/:id/like', likePostById);
router.post('/:id/unlike', unlikePostById);

module.exports = router;
