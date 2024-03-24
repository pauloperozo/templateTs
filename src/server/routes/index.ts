import { welcomeRouter } from './welcome'
import { authRouter } from './authRouter'
import { wordleRouter } from './wordleRouter'


export default ( app ) => {

    app.use("/welcome", welcomeRouter);
    app.use("/auth", authRouter);
    app.use("/wordle", wordleRouter);
}