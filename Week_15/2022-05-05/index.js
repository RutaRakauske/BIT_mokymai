import express from 'express'
import {dirname} from 'path'
import {fileURLToPath} from 'url'
// Express modulio iniciavimas
const app = express()
// sugeneruojamas esamos direktorijos absoliutus kelias
const __dirname = dirname(fileURLToPath(import.meta.url))

// Kelias/route

app.get('/', (request, response) => {
    // response.status(404) kaip siųsti statuso kodą
    // response.send('<h1>Titulinis puslapis</h1>')
    response.sendFile(__dirname + '/templates/index.html')
})

app.get('/about', (request, response) => {
    // response.send('<h1>Apie mus</h1>')
    response.sendFile(__dirname + '/templates/about.html')
})

app.get('/career', (request, response) => {
    // response.send('<h1>Apie mus</h1>')
    response.sendFile(__dirname + '/templates/career.html')
})

app.get('/clients', (request, response) => {
    // response.send('<h1>Apie mus</h1>')
    response.sendFile(__dirname + '/templates/clients.html')
})

app.get('/contacts', (request, response) => {
    // response.send('<h1>Apie mus</h1>')
    response.sendFile(__dirname + '/templates/contacts.html')
})

app.listen(3000)