const express=require("express");
const router=express.Router();
const controller=require("../controller/app.js");

router.get("/shardSimulator",controller.getShardSimulator);

router.post("/shardSimulator",controller.postShardSimulator);

module.exports=router;