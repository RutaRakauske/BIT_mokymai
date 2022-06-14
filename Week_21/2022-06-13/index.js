import express from 'express'
import cors from 'cors'
import { ItemsList, Orders } from './database/connection.js'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import session from 'express-session'

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))

//Sesijos priskyrimas prie express objekto
app.use(session({
    secret: 'Xc8BWMjxR5u2hyJaQ2R7UCUXAJeB4jKrXF722RXuumjZEfcD7AHuhCmEYgfCMeQ67J3Tqtumd6Nzf4ZKU9BJ3j9a4TLvFT2KmKrcaBTbdsYVWSYjXd54PRASMxfaX7Zz',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 864000000
    }
}))

//Express konfiguracijos prapletimas norint priimti POST metodu perduodamus duomenis
app.use(express.urlencoded({
    extended: false
}))

app.use( express.json() )

//Teisingi prisijungimo duomenys
const credentials = {
    login: 'admin@bit.lt',
    password: '1234'
}


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/templates/index.html')
})

app.post('/api/orders/new', async (req, res) => {
    // console.log(req.body)
    try {
        await Orders.create(req.body)
        res.sendStatus(200)
    } catch {
        res.sendStatus(500)
        }
})

// Uzduoties trynimas
app.delete('/api/orders/delete/:id', async (req, res) => {
    if(req.session.loggedin){
        const id = req.params.id
        try {
            await Orders.findByIdAndDelete(id, req.body)
            res.sendStatus(200)
        } catch {
            res.sendStatus(500)
        }
    } else{
        res.redirect('/login')
        return
    }
})

// Uzduoties redagavimas
app.put('/api/order/edit/:id', async (req, res) => {
    const id = req.params.id
    try {
        await Orders.findByIdAndUpdate(id, req.body)
        res.sendStatus(200)
    } catch {
        res.sendStatus(500)
    }
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/templates/login.html')
})

app.post('/authenticate', (req, res) => {
    if(parseInt(Object.keys(req.body).length) > 0) {
        if(
            req.body.email != '' &&
            req.body.password != '' &&
            req.body.email === credentials.login &&
            req.body.password === credentials.password
        ) {
            req.session.loggedin = true
            req.session.user = credentials.name
            res.sendStatus(200)
        } else {  
            res.sendStatus(500)
        }
    }
})

app.get('/admin', (req, res) => {
    // tik tai prisijunges vartotojas gali patekti i admin puslapi
    if(!req.session.loggedin){
        res.redirect('/login')
        return
    } else{
        res.sendFile(__dirname + '/templates/administratorius.html')
    }
})


app.get('/api/orders', async (req, res) => {
    try {
        const orderList = await Orders.find()
        res.status(200).json(orderList)
    } catch {
        // res.status(500).end
        // res.sendStatus(500)
        res.sendStatus(500)
        }
    })

app.get('/items', (req, res) => {
    // tik tai prisijunges vartotojas gali patekti i admin puslapi
    if(!req.session.loggedin){
        res.redirect('/login')
        return
    } else{
        res.sendFile(__dirname + '/templates/prekes.html')
    }
})

// Prideti naujas prekes in mongodbd
app.post('/api/items/new', async (req, res) => {
    // console.log(req.body)
    try {
        await ItemsList.create(req.body)
        res.sendStatus(200)
    } catch {
        res.sendStatus(500)
        }
})
// istraukti visus duomenis is db
app.get('/api/items', async (req, res) => {
    try {
        const orderList = await ItemsList.find()
        res.status(200).json(orderList)
    } catch {
        // res.status(500).end
        // res.sendStatus(500)
        res.sendStatus(500)
        }
    })

// Prekes trynimas
app.delete('/api/items/delete/:id', async (req, res) => {
    if(req.session.loggedin){
        const id = req.params.id
        try {
            await ItemsList.findByIdAndDelete(id, req.body)
            res.sendStatus(200)
        } catch {
            res.sendStatus(500)
        }
    } else{
        res.redirect('/login')
        return
    }
})

// Prekės įrašo redagavimas
app.put('/api/item/edit/:id', async (req, res) => {
    const id = req.params.id
    try {
        await ItemsList.findByIdAndUpdate(id, req.body)
        res.sendStatus(200)
    } catch {
        res.sendStatus(500)
    }
})

app.listen(3000)