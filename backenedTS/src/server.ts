import { app } from './app'
import dotenv from 'dotenv'

dotenv.config({ path: './config/config.env' })

app.listen(process.env.PORT, () => {
    console.log('server running successfully on port ', process.env.PORT)
})