import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const ResourceGuidelineSchema = new Schema(
    {
        title: { type: String, required: true }
    }
)
