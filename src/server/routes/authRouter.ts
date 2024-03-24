import { Router }  from 'express'
import { AuthController } from '../controllers/authController'
import { schemaValidations } from '../middlewares/shemaValidations'
import { signinSchema, signupSchema } from '../schema/authSchema'

const authController = new AuthController()

const authRouter = Router()
.post('/signup', schemaValidations( signupSchema ),authController.SignUp )
.post('/signin',schemaValidations( signinSchema ),authController.SignIn )

export { authRouter }