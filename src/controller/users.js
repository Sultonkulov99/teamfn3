import fs from "fs"
import path from "path"

const GET = (req,res) =>{
    res.status(200).json({message: "get users"})
    console.log("keldi");
}
const REGISTER = (req,res) =>{
    console.log("Muhammadrizo ozgartirdi !?")
}
const LOGIN = (req,res) =>{
    
}

const POST = (req,res) =>{
    
}

const get_Users = (req,res) =>{
    
}

export default {
    GET,
    REGISTER,
    LOGIN,
    POST,
    get_Users
}