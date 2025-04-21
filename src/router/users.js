import { Router } from "express";
import userController from "../controller/users.js"

let router = Router()

router.get("/api/users",userController.GET)
router.post("/api/users",userController.REGISTER)
router.post("/api/users",userController.LOGIN)
router.post("/api/users",userController.POST)
<<<<<<< HEAD
=======
router.get("/api/users/:id",userController.get_Users)
router.get("/api/users",userController.Abbos)
router.get("/api/users",userController.Abdulloh)
router.get("/api/users",userController.Abduraxmon)
router.get("/api/users",userController.Abror)
router.get("/api/users",userController.MuhammadAziz)
router.get("/api/users",userController.MuhammadYaxyo)
router.get("/api/users",userController.Faxriddin)
router.get("/api/users",userController.Bahodir)
router.get("/api/users",userController.Otabek)
router.get("/api/users",userController.Ozodbek_M)
router.get("/api/users",userController.Ozodbek_N)
router.get("/api/users",userController.Umidjon)
router.get("/api/users",userController.Humoyun)
>>>>>>> a1786f84402e83a5271e115ac0a7755954c03c1a

export default router
