import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const ZoneSchema = new Schema(
    {
        name: { type: String, required: true },
        stationId: {type: Schema.Types.ObjectId, ref: 'Station', required: true}
    }
)

ZoneSchema.virtual('Station', {
    localField: 'stationId',
    foreignField: '_id',
    justOne: true,
    ref: 'Station'
})