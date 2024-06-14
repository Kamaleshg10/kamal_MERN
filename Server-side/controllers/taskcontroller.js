const { default: mongoose } = require("mongoose");
const taskModel = require("../models/taskmodel");


// to create a Task - POST
const createTask = async (req,res) => {
    const {title,description} = req.body;
    try{
        const Task = await taskModel.create({title,description});
        res.status(200).json(Task);
    } catch(e) {
        res.status(400).json({error:e.message});
    }
};

// to get all Task -GET
const getTasks = async (req,res) => {
    try{
        const tasks = await taskModel.find({});
        res.status(200).json(tasks);
    } catch(e) {
        res.status(400).json({error:e.message});
    }
};

// to get single Task -GET
const getSingleTasks = async (req,res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({message:"Task Not Found"});
    }    
    try{
        const singleTask = await taskModel.findById(id);
        res.status(200).json(singleTask);
    } catch(e) {
        res.status(400).json({error:e.message});
    }
};

// to upldate a Task - PATCH 
const updateTask = async (req,res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({message:"Task Not update"});
    }    
    try{
        const task = await taskModel.findByIdAndUpdate({_id:id},{...req.body});        
        res.status(200).json(task);
    } catch(e) {
        res.status(400).json({error:e.message});
    }
};

// to delete a Task - Delete 
const deleteTask = async (req,res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({message:"Task Not Update"});
    }    
    try{
        const task = await taskModel.findByIdAndDelete({_id:id},{...req.body});        
        res.status(200).json(task);
    } catch(e) {
        res.status(400).json({error:e.message});
    }
};



module.exports = {createTask,getTasks,getSingleTasks,updateTask,deleteTask};