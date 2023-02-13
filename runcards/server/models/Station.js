import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const StationSchema = new Schema(
    {
        name: { type: String, required: true },
    }
)