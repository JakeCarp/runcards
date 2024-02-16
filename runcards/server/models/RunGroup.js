import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const RunGroupSchema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        cards: [{type: Schema.Types.ObjectId, ref: 'RunCard'}],
        zoneId: {type: Schema.Types.ObjectId, ref: 'Zone', required: true},
        type: {type: Number, enum: [1, 2, 3]}
    }
)
