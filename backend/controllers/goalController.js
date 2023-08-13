const Goal = require('../model/goalModel')

const getGoal = async (req,res) =>{
    const result = await Goal.find();
    res.status(200).json({message:result});
}

const createGoal = async (req,res) =>{
    const result = await Goal.create({text:req.body.text});
    res.status(200).json({message:"Goals Createed Successfullyllyy!!"});
}

const updateGoal = async (req,res) =>{
    const result = await Goal.findByIdAndUpdate(req.params.id,req.body,{new:true})

    res.status(200).json({result});
}

const deleteGoal = async (req,res) =>{
    const goal  = await Goal.findById(req.params.id);
    await goal.deleteOne()
    res.status(200).json({id:req.params.id});
}

const SearchGoal = async (req,res) =>{
    const goal  = await Goal.findById(req.params.id);
    
    res.status(200).json({goal});
}

module.exports = {
    getGoal,
    createGoal,
    updateGoal,
    deleteGoal,
    SearchGoal
}