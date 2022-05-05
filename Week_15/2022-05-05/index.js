import express from 'express'

const app = express()

// Kelias/route

app.get('/', (request, response) => {
    // response.status(404) kaip siųsti statuso kodą
    response.send('<h1>Titulinis puslapis</h1>')
})

app.get('/apie-mus', (request, response) => {
    response.send('<h1>Apie mus</h1>')
})

app.listen(3000)