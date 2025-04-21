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
    let user = req.body
    data = data.find(us =>  us.username === parseInt(user.username))
    if(data.password === user.password) {
        res.send({
            data            
        })    
    }else{
        res.status(400).send({
            status : "Login not accept ! "
        })
    }
    console.log(data);
}

const POST = (req,res) =>{
    
}

export default {
    GET,
    REGISTER,
    LOGIN,
    POST
}