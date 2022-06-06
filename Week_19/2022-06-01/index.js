import express from 'express'
import cors from 'cors'
import { Tasks } from './database/connection.js'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))

app.use( express.json() )

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/templates/index.html')
})

// Visu uzduociu paemima
app.get('/api/tasks/all', async (req, res) => {
try {
    const taskList = await Tasks.find()
    res.status(200).json(taskList)
} catch {
    // res.status(500).end
    // res.sendStatus(500)
    res.sendStatus(500)
    }
})

// Uzduoties pridejimas i DB
app.post('/api/tasks/new', async (req, res) => {
    // console.log(req.body)
    try {
        await Tasks.create(req.body)
        res.sendStatus(200)
    } catch {
        res.sendStatus(500)
        }
})

// CRUD - Create, Read, Update, Delete

// Uzduoties redagavimas
app.put('/api/tasks/edit/:id', async (req, res) => {
    const id = req.params.id
    try {
        await Tasks.findByIdAndUpdate(id, req.body)
        res.sendStatus(200)
    } catch {
        res.sendStatus(500)
    }
})

// Uzduoties trynimas
app.delete('/api/tasks/delete/:id', async (req, res) => {
    const id = req.params.id
    try {
        await Tasks.findByIdAndDelete(id, req.body)
        res.sendStatus(200)
    } catch {
        res.sendStatus(500)
    }
})

app.listen(3000)