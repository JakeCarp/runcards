import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const RunGroupSchema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        cards: [{type: Schema.Types.ObjectId, ref: 'RunCard'}],
        type: {type: Number, enum: [1, 2, 3]}
    }
)
