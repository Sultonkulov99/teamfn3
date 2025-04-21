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

const Abduraxmon = (req,res) =>{
    
}
const Umidjon = (req,res) =>{
    
}
const Faxriddin = (req,res) =>{
    
}

const Abror = (req,res) =>{
    
}
const Ozodbek_M = (req,res) =>{
    
}
const Ozodbek_N = (req,res) =>{
    
}
const Abdulloh = (req,res) =>{
    
}

const Abbos = (req,res) =>{
    
}
const Otabek = (req,res) =>{
    
}
const MuhammadAziz = (req,res) =>{
    
}
const Bahodir = (req,res) =>{
    
}

const Humoyun = (req,res) =>{
    
}
const MuhammadYaxyo = (req,res) =>{
    
}
const Boburmirzo = (req,res) => {
    let users = JSON.parse(fs.readFileSync(path.join(process.cwd(),"../database/users.js")))
    res.status(200).json(users)
    
}
export default {
    GET,
    REGISTER,
    LOGIN,
    POST,
    get_Users,
    Abduraxmon,
    Umidjon,
    MuhammadAziz,
    MuhammadYaxyo,
    Humoyun,
    Bahodir,
    Abdulloh,
    Abbos,
    Otabek,
    Ozodbek_M,
    Ozodbek_N,
    Faxriddin,
    Abror
}