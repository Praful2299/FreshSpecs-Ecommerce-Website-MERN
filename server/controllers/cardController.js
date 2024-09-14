 const cardModel = require("../models/cardModel");

// const TrendingCard = async (req, res) => {
//     try {
//         const TrendingData = await cardModel.find();
//         res.status(200).json(TrendingData);  
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Error fetching trending cards" });  
//     }
// };

// module.exports = {
//     TrendingCard
// };


const TrendingCard = async (req, res) => {
    try {
        const trendingCards = await cardModel.find(); 
            res.status(200).json(trendingCards); 
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
    }
};

const KidsCards=async (req,res)=>{
    try {
        const kidscards = await cardModel.find();

        res.status(200).json(kidscards);
    } catch (error) {
        console.log(error);
        res.status(405).json({message: "Server Error"})
    }
}

const EyeCards= async(req,res)=>{
    try {
        const eyecards = await cardModel.find();

   res.status(200).json(eyecards);
    } catch (error) {
        console.log(error);
        res.status(405).json({message: "Server Error"})
    }
}

const ComputerCards= async(req,res)=>{
    try {
        const computercards = await cardModel.find();

   res.status(200).json(computercards);
    } catch (error) {
        console.log(error);
        res.status(405).json({message: "Server Error"})
    }
}

module.exports = {
    TrendingCard,
    KidsCards,
    EyeCards,
    ComputerCards
};
