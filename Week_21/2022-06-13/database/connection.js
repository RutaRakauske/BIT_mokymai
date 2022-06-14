import mongoose from 'mongoose'
import orders from '../models/orders.js'
import items from '../models/items.js'

const conn = mongoose.createConnection('mongodb://localhost:27017/Orders' , (error) => {
    if(error) {
        console.log("Nepavyko prisijungti prie duomenu bazes: " + error)
        return
    }
})

export const Orders = conn.model('Orders', orders)

export const ItemsList = conn.model('ItemsList', items)
