import { Router }  from 'express'
import { WordleController } from '../controllers/wordleController'
import { schemaValidations } from '../middlewares/shemaValidations'
import { wordleSchema } from '../schema/wordleShema'

const wordleController = new WordleController()
const wordleRouter = Router()
.post('/play',schemaValidations( wordleSchema) ,wordleController.Play)
.get('/amount',wordleController.Amount)
.get('/top',wordleController.Top)
.get('/match',wordleController.Match)
 
 export { wordleRouter }
