const { Router } = require("express");
const {getAlltoBD}= require("../controllers/getAlltoBD.js");

const router = Router();

router.get("/",async(req,res)=>{
    getAlltoBD(req,res);
 });

 
module.exports = router;
