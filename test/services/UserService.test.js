/*
  run test: npx jest UserService.test.js
*/
require('dotenv').config()
const  { UserService } = require("../../dist/aplications/services/UserService")

describe('Test class UserService', () => {

    it('UserService-HashPassword', async () => {
        const password = 'Oha'
        const result = UserService.HashPassword(password)
        expect(result).toBeDefined()
    })

    it('UserService-ComparePassword', async () => {
        const req_password = 'Oha'
        const db_password = 'Oha'
        const result = UserService.ComparePassword(req_password, db_password)
        expect(result).toBeDefined()
    })

    it('UserService-GenerateToken', () => {
        const payload = {}
        const result = UserService.GenerateToken(payload)
        expect(result).toBeDefined()
    })

})
