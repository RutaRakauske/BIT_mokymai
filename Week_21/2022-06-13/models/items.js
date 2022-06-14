import mongoose from 'mongoose'

export default new mongoose.Schema({
    itemName: String,
    itemDescription: String,
    itemPicture: String
})