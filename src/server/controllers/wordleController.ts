import { Request, Response }  from 'express'
import HttpError from '../helpers/error'
import { wordleService } from '../../aplications/services/WordService'
import { Wordle } from '../../aplications/entities/Wordle'
import { DictionaryService } from '../../aplications/services/DictionaryService'
import { env } from 'node:process';
import moment from 'moment'

export class WordleController {

    async Play( req:Request, res:Response ) {
        
        try {
            
            const { user_word } = req.body
            const { session }  = res.locals
            const { userId } = session
            const { MIN,MAXATT } = env
        
            let wordle = await wordleService.getOpenGame( userId )          
            if( !wordle ){
                wordle = new Wordle()
                wordle.userId = userId
                wordle.end = moment().add( MIN,'minutes').unix()
                wordle.word = await DictionaryService.getRandomWord()
                wordle = await wordleService.Create( wordle )
            }
        
            const root_word = await wordle.word
            if(!root_word) throw new Error("Service down")
            const compare = wordleService.compareTo( user_word, root_word )

            const { wordleId,end,winer,attempts,word } = wordle
        
            if( wordleService.isWiner( compare ) )
            {
                wordle.winer = true
                wordle.complete = true
                await wordleService.Update( wordle ) 
                return res.status(200).json( {wordleId, message: "you winer...",attempts, word } )
            }

            if( wordle.attempts ===  Number(MAXATT) ){
                wordle.complete = true
                await wordleService.Update( wordle ) 
                return res.status(200).json( {wordleId, message: "you lost...",attempts, word } )
            }

            wordle.attempts++
            await wordleService.Update( wordle ) 
            
            const response = {
                wordleInfo :{ wordleId,userId,end,attempts,winer,word},
                match : { compare }
            }
            
            res.status(200).json( response ) 

        } catch ( error  ) {           
            const { statusCode,response } = HttpError( error ) 
            res.status( statusCode ).json( response )
        }
    }

    async Amount( req:Request, res:Response ) {
               
        try {
 
            const { session }  = res.locals
            const { userId } = session
            
            const response = await wordleService.getAmount( userId )
            res.status(200).json( response ) 

        } catch ( error  ) {           
            const { statusCode,response } = HttpError( error ) 
            res.status( statusCode ).json( response )
        }
    } 

    async Top( req:Request, res:Response ) {

        try {
       
            const response = await wordleService.getTop()
            res.status(200).json( response ) 

        } catch ( error  ) {           
            const { statusCode,response } = HttpError( error ) 
            res.status( statusCode ).json( response )
        }
    }

    async Match( req:Request, res:Response ) {

        try {
       
            const response = await wordleService.getMatch()
            res.status(200).json( response ) 

        } catch ( error  ) {           
            const { statusCode,response } = HttpError( error ) 
            res.status( statusCode ).json( response )
        }
    } 
}

 