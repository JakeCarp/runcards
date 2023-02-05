import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const ResourceSchema = new Schema(
    {
        unitNumber: {type: String, required: true},
        type: { type: String, enum: ['Engine', 'Tender', 'Paramedic Engine', 'Pumper/Tender', 'Ladder Truck', 'Battalion Chief', 'Fire Chief', 'Deputy Chief', 'Fire Marshal', 'Training Officer', 'Fire Investigator', 'Air Trailer', 'Squad', 'Brush Truck', 'Brush Truck (Heavy)', 'Ambulance'], required: true },
        minStaff: { type: Number, required: true },
        alwaysStaffed: {type: Boolean, required: true},
        stationId: { type: Schema.Types.ObjectId, ref: 'Station', required: true },
        admin: { type: Boolean, required: true },
        agency: {type: String, enum: ['NFD Resource', 'Canyon County Resource', 'Ada County Resource']}
    }
)

ResourceSchema.virtual('station', {
    localField: 'stationId',
    foreignField: '_id',
    justOne: true,
    ref: 'Station'
})