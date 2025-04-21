import fs from "fs"
import path from "path"
const GET = (req,res) =>{
    res.status(200).json({message: "get users"})
}
const REGISTER = (req,res) =>{
    console.log("Muhammadrizo ozgartirdi !?")
}
const LOGIN = (req,res) =>{
    let data = fs.readFileSync(path.join(process.cwd(),"src","database","users.json"))
    
}

const POST = (req,res) =>{
    
}

export default {
    GET,
    REGISTER,
    LOGIN,
    POST
}