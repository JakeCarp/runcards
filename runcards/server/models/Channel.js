import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const ChannelSchema = new Schema(
    {
        name: { type: String, required: true },
    }
)