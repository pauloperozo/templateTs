import { Dictionary } from '../entities/Dictionary'
import { env } from 'node:process'

export class DictionaryService {

    static async getRandomWord() : Promise<string> {
    
        const { MAXDIC } = env
        const randId : number = Math.floor( Math.random() * Number( MAXDIC ) )
        const dictionary = await Dictionary.findOneBy({ dictionaryId : randId})
        return dictionary.value
    }

}