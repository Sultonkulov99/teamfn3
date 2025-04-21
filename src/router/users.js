import { Router } from "express";
import userController from "../controller/users.js"

let router = Router()

router.get("/api/users",userController.GET)
router.post("/api/users",userController.REGISTER)
router.post("/api/users",userController.LOGIN)
router.post("/api/users",userController.POST)
router.get("/api/users/:id",userController.get_Users)

export default router
