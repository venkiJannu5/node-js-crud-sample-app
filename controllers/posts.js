const Posts = require("../models/post")

PostController={}

PostController.createPost = async function(req,res){
	const posts = new Posts({
		post:req.body.post,
	})
	try{
		var result = await posts.save();
			return res.status(200).json(
                result
            );
	}
	catch(err){
		    console.log(" catch error",err);
	}
};
PostController.dispalyPosts = async (req,res)=>{
	try{
		var allPosts = await Posts.find().sort({'_id': -1});
			console.log(allPosts);
			return res.status(200).json(
				allPosts
			)
	}
	catch(err){
		console.log(" catch error",err);
	}
};
PostController.updateVote = async (req,res) =>{
	try{
		console.log(req.body.id);
		var vote = await Posts.updateOne({'_id':req.body.id},{$inc:{voteCount: 1 }});
		return res.status(200).json(
					vote
		)
	}
	catch(err){
		console.log(" catch error",err);
	}
}

module.exports = PostController;