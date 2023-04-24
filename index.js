const express=require("express");
const cors=require("cors");
const bodyParser=require("body-parser");
const dotenv=require("dotenv");

const app=express();
const routes=require("./routes/app.js");

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

dotenv.config();

app.use(routes);

app.listen(process.env.PORT,()=>console.log(process.env.PORT));