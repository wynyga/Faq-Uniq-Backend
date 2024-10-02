import express from "express"
import faqController from "../controller/faq-controller.js"
import loginController from "../controller/login-controller.js"
import registerController from "../controller/register-controller.js"

const publicRouter = express.Router()

// FAQ ROUTER
publicRouter.get("/faq",faqController.getMany)
publicRouter.post("/login",loginController.login)
publicRouter.post("/register",registerController.register)


export default publicRouter 