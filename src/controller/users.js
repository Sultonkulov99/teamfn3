import fs from "fs"
import path from "path"

const GET = (req, res) => {
    res.status(200).json({ message: "get users" })
}
const REGISTER = (req, res) => {
    console.log("Muhammadrizo ozgartirdi !?")
}
const LOGIN = (req, res) => {

}

const POST = (req, res) => {

}

const get_Users = (req, res) => {
    res.send("nima gap")
}

const Abduraxmon = (req,res) =>{
    
}
const Umidjon = (req,res) =>{
    console.log("Umidjon ozgartirdi! 👌")
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
    res.send("abduloh")
}

const Abbos = (req,res) =>{
    
}
const Otabek = (req,res) =>{
    
}
const MuhammadAziz = (req,res) =>{
    res.status(200)
    res.send("😎😎😎😎😎😎😎😎Muhammadaziz😎😎😎😎😎😎😎😎")
}
const Bahodir = (req,res) =>{
    
}

const Humoyun = (req,res) =>{
    
}
const MuhammadYaxyo = (req,res) =>{
    
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