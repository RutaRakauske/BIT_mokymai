import express from 'express'
import {dirname} from 'path'
import {fileURLToPath} from 'url'
import { faker } from '@faker-js/faker'

const __dirname = dirname( fileURLToPath(import.meta.url) )

const app = express()

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/templates/index.html')
})

app.get('/person', (req, res) => {
    // console.log(fake('{{name.firstName}} {{name.lastName}}'))
    const profile = {
        name: faker.fake('{{name.firstName}} {{name.lastName}}'),
        picture: faker.image.avatar(),
        date: faker.date.past(),
        address: faker.address.city(),//only city instead of full address
        phone: faker.phone.phoneNumber(),
        pet: faker.animal.type()
        // pet name instead of password
    }

    res.json(profile)
})

app.listen(3000)