import { Wordle } from "../entities/Wordle";
import { env } from 'node:process';
import moment from 'moment'
 
export class wordleService {

    static async Create( wordle : Wordle ) : Promise < Wordle > {
        return Wordle.save( wordle )
    }

    static async Update( wordle : Wordle ) : Promise < Wordle > {
        return Wordle.save( wordle )
    }

    static compareTo( user_word:string, root_word:string ) : { letters: string; value: number }[]{

        const user_letters = Array.from( user_word.toLowerCase() )
        const root_letters = Array.from( root_word.toLowerCase() )
        const resul = Array()

        for( let index in  user_letters ){
            const letters = user_letters[index]
            const value = root_letters.includes(letters) ? root_letters[index] === letters ? 1 : 2 : 3
            resul.push( { letters , value } )
        }
    
        return resul
    }
    
    static async getOpenGame( userId: number ){

        const openGame = await Wordle.findOne({
            where: { userId,complete :false },
            order: { created_at: 'DESC' }
        })

        return  openGame && moment().unix() <= openGame.end ? openGame : null
    }
 
    static isWiner( compare: { letters: string; value: number }[]  ) : boolean {

        const { MAXATT } = env
        const countAttempts = compare.reduce( ( acum ,obj ) =>  {
            if( obj.value === 1) acum++ 
            return acum
        },0) 

        return  countAttempts === Number(MAXATT) ? true : false       
    }

    static async getAmount( userId : number ) {

        const result = await Wordle.find({
            where: { userId },
        })

        const report = result.reduce( ( acum ,obj ) =>  {
            if( obj.winer && obj.complete) acum.winer++
            if( !obj.winer && obj.complete) acum.loser++
            if(!obj.complete) acum.pending++
            return acum
        },{ winer:0,loser:0,pending:0}) 

        return  report
    }

    static async getTop() {

        const sql = `SELECT
        "user"."email",
        COUNT( *) as value
        FROM
        wordle
        INNER JOIN "user" ON  "user"."userId"  =  wordle."userId"
        WHERE wordle.complete = true AND wordle.winer = true
        GROUP BY  "user"."email"
        ORDER BY value DESC
        LIMIT 10
        `
        const result = await Wordle.query( sql )
        return  result
    }


    static async getMatch() {

        const sql = `
        SELECT
        wordle.word,
        COUNT( *) as value
        FROM
        wordle
        INNER JOIN "user" ON  "user"."userId"  =  wordle."userId"
        WHERE wordle.complete = true AND wordle.winer = true
        GROUP BY wordle.word
        ORDER BY value DESC
        LIMIT 10
        `
        const result = await Wordle.query( sql )
        return  result
    }

}