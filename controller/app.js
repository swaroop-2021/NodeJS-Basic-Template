const path=require("path");

exports.getShardSimulator=(req,res,next)=>{
    res.status(200).sendFile(path.join(__dirname,"..","model","index.html"));
}

exports.postShardSimulator=(req,res,next)=>{
    let {
        shards,
        nodes
    } =req.body;
    res.status(200).json({shards:shards,nodes:nodes});
}
