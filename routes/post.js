const express = require('express');
const router  =  express.Router();

const postController = require('../controllers/posts.js');

router.post('/addpost',postController.createPost,async function(req, res){
		console.log("inside");
});
router.get('/allposts',postController.dispalyPosts, async function(req,res){
	
});
router.put('/updatevote',postController.updateVote,async function(req,res,next){
	
	
});

module.exports = router;