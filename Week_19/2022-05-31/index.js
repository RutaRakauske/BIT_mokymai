import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import cocktaildetails from './models/cocktail_details.js'

await mongoose.connect('mongodb://localhost/cocktails')

const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(cors())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/templates/index.html')
})

app.get('/get-cocktail', async (req, res) => {
    res.json(await cocktaildetails.find())
})

app.get('/delete/:id', async (req, res) => {
    const id = req.params.id
    const deleted = await cocktaildetails.deleteOne({
        _id: id
    })
    if(deleted.deletedCount > 0){
        res.status(200).send('Įrašas ištrintas')
    } else {
        res.status(400).send('Įrašo rasti nepavyko')
    }
})

app.listen(3000)