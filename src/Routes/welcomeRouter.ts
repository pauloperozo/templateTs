import { Request, Response, Router }  from 'express'

const welcomeRouter = Router()
.get('/welcome', ( req:Request, res:Response ) => res.json({message:"Welcome"}) )
export { welcomeRouter }