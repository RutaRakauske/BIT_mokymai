import mongoose from 'mongoose'

const Schema = mongoose.Schema

const cocktaildetails = new Schema({
    title: String,
    instructions: String,
    thumbnail: String
})

export default mongoose.model('cocktaildetails', cocktaildetails)