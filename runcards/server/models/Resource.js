import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const ResourceSchema = new Schema(
    {
        name: { type: String, required: true },
        unitNumber: {type: String, required: true},
        type: { type: String, enum: ['Engine', 'Tender', 'Paramedic Engine', 'Pumper/Tender', 'Ladder Truck', 'Battalion Chief', 'Fire Chief', 'Deputy Chief', 'Fire Marshal', 'Air Trailer', 'Squad', 'Brush Truck', 'Brush Truck (Heavy)', 'Ambulance'], required: true },
        minStaff: { type: Number, required: true },
        alwaysStaffed: {type: Boolean, required: true},
        stationId: {type: Schema.Types.ObjectId, ref: 'Station', required: true}
    }
)

ResourceSchema.virtual('station', {
    localField: 'stationId',
    foreignField: '_id',
    justOne: true,
    ref: 'Station'
})