/*
  run test: npx jest DictionaryService.spec.js
*/

require('dotenv').config()
const  { DictionaryService } = require("../../dist/aplications/services/DictionaryService")
const  { AppDataSource } = require("../../dist/database/data-source") 


describe('Test class DictionaryService', () => {

    it('DictionaryService-getRandomWord', async () => {
        await AppDataSource.initialize() 
        const result = await DictionaryService.getRandomWord()
        expect(result).toBeDefined()
    })

})
