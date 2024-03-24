import { ZodError } from "zod";

export default  function HttpError( error ) {

    if( error instanceof ZodError ){

        return {
            statusCode : 400,
            response: { validation:false,errors: error.issues.map( issue => issue.message )}
        }
    }
    else if( error instanceof Error ){

        return {
            statusCode : 404,
            response: { error:true, message: error.message }
        }

    }
}