import { Router }  from 'express'
import { AuthController } from '../Controllers/authController'
import { validationDto } from '../Middlewares/validationDto'
import { signupDto,signinDto } from '../Dtos/authDto'

const authController = new AuthController()
const authRouter = Router()
.post('/signup', validationDto( signupDto ),authController.SignUp )
.post('/signin',validationDto( signinDto ),authController.SignIn )

export { authRouter }
