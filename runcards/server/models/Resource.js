import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const ResourceSchema = new Schema(
    {
        unitNumber: {type: String, required: true},
        type: { type: String, enum: ['Paramedic Engine', 'Paramedic Ladder', 'Aerial/Pumper Truck', 'BC/Command', 'Air Trailer', 'Reserve Engine', 'Squad', 'Squad 51','Rescue Squad', 'Trench Rescue', 'Reserve Truck', 'Water Tender', 'Brush Truck', 'Fire Chief', 'Deputy Chief', 'Training Officer', 'Fire Invest', 'Fire Marshal'], required: true },
        minStaff: { type: Number, required: true },
        alwaysStaffed: {type: Boolean, required: true},
        stationId: { type: Schema.Types.ObjectId, ref: 'Station', required: true },
        admin: { type: Boolean, required: true },
    }
)

ResourceSchema.virtual('station', {
    localField: 'stationId',
    foreignField: '_id',
    justOne: true,
    ref: 'Station'
})