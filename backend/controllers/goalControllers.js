const asyncHandler = require('express-async-handler');

const getGoals = asyncHandler(async (req, res)=>{
    res.status(200).json({message:"Get Goals"});
});

const setGoal = asyncHandler(async (req, res)=>{
    if(!req.body.text){
        throw new Error;
    }
    else{
    res.status(200).json({message:"Set Goals"});}
});

const updateGoal = asyncHandler(async (req, res)=>{
    res.status(200).json({message:`Update Goals ${req.params.id}`});
});

const deleteGoal = asyncHandler(async (req, res)=>{
    res.status(200).json({message:`Delete Goals ${req.params.id}`});
});

module.exports = {getGoals, setGoal, updateGoal, deleteGoal};