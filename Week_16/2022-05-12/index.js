import express from 'express'
import {engine} from 'express-handlebars'
import session from 'express-session'
import {readFile, appendFile , writeFile} from 'fs/promises'

const app = express()

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './templates')

//Sesijos priskyrimas prie express-session objekto
app.use(session({
    secret: 'GkEmqNdwThaGJCzxeMPHx75GQQW9SCDUvEykMrDFC2hBhCWcHQH37EpumqfuKLrKcfpwmjbTrSDWRFjbZbLxqFhwqhjzJxKf9dYWhPaXtV8YTHpCcTsHCwsEw9Y7bYqu',
    resave: false,
    saveUninitialized: false,//sesija sukurti tik tada jei sesija sekmingai sukurta. True iskart sukuria, net jei neprisijungia sekmingai
    cookie: {
        maxAge: 864000000 //milisekundemis laikas, kiek cookie egzistuos, paskui expirina
    }
}))

//Express konfiguracijos prapletimas norint priimti POST metodu perduodamus duomenis
app.use(express.urlencoded({
    extended: false //ar turim praplesta sifravima ar ne. Cia tuo atveju kai norim naudoti post metoda
}))

const file = './db/duomenys.json'

app.get('/zmones/:pavarde', async (req, res) => {
    try{
        const vardai = ['Jonas', 'Paulius', 'Rita', 'Gediminas', 'Karolis', 'Arvydas', 'Ruta', 'Petras', 'Vytautas', 'Emilija']
        const randomNo = Math.floor(Math.random() * 10)
        const randomName = vardai[randomNo]
        const fullName = randomName + ' ' + req.params.pavarde
    
        // Patalpinimas tekstiniame faile - 2 uzduotis
        const vardaiTxt = await readFile('vardai.txt', 'utf8')
        if (vardaiTxt != ''){
            await appendFile('vardai.txt', '\n' + fullName, 'utf8')
        } else{
            await appendFile('vardai.txt', fullName, 'utf8')
        }

        // Patalpinimas json faile - 3 uzduotis
        const db = await readFile(file, 'utf8') //await - laukia kad uzkrautu duomenys, o ne promise. Await galim leisti tik asinchronineje funkcijoje - async
        let database = JSON.parse(db)
        database.push(fullName)
        await writeFile(file, JSON.stringify(database), 'utf8')

        res.send(fullName + ' sėkmingai išsaugotas faile')
    } catch {
        res.send('Įvyko klaida')
    }

})

app.listen(3000)