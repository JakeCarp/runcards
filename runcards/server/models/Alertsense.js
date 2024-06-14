import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const AlertsenseSchema = new Schema(
  {
    link: { type: String, required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
