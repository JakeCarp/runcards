import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const RunCardSchema = new Schema(
    {
        title: { type: String, required: true },
        content: {type: String},
        groupId: { type: Schema.Types.ObjectId, ref: 'RunGroup', required: true}
    }
)

RunCardSchema.virtual('group', {
    localField: 'groupId',
    foreignField: '_id',
    justOne: true,
    ref: 'RunGroup'
})