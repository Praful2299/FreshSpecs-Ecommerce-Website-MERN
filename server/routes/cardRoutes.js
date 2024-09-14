const express=require("express");
const route=express.Router();
const cardController=require("../controllers/cardController")

route.get("/trending",cardController.TrendingCard);
route.get("/kidsglass",cardController.KidsCards);
route.get("/eyewear",cardController.EyeCards);
route.get("/computerglasses",cardController.ComputerCards);


module.exports=route;