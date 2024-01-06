const express = require('express')
const app = express()
const cors =require('cors')
app.use(express.json())
app.use(cors())
import {connectionToDatabase} from './DbConnection/db'

connectionToDatabase();
app.use('/user',[userRouter,addNewAssetsRouter])


app.listen(3001,()=>console.log(`You are Connected to BackEnd Server`))