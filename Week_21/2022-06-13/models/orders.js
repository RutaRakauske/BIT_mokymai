import mongoose from 'mongoose'

export default new mongoose.Schema({
    itemName: String,
    name: String,
    lastName: String,
    address: String,
    city: String,
    phoneNo: String,
    email: String,
    status: String
})