/*
  run test: npx jest WordService.test.js
*/
require('dotenv').config()
const  { wordleService } = require("../../dist/aplications/services/WordService")
 
describe('Test class wordleService', () => {

    it('wordleService-compareTo', () => {
        const user_word1 = 'Oha'
        const root_word1 = 'Oha'
        const result = wordleService.compareTo(user_word1, root_word1)
        expect(result).toBeDefined()
    })

})
