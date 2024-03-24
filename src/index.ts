import 'dotenv/config'
import { env } from 'node:process';
import { app } from './server/app'
import { AppDataSource } from "./database/data-source"
import routes  from './server/routes'

( async _=> {
 
    const { PORT } = env
 
    /*Database */
    await AppDataSource.initialize() 
    /*Server  */

    routes( app )

    await app.listen( PORT, () =>  console.log(`API Corriendo Por El Puerto :${ PORT }`) )
    
})()