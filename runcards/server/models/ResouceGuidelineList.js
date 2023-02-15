import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const ResourceGuidelineListchema = new Schema(
    {
        title: { type: String, required: true },
        items: { type: [String], default: []},
        ResourceGuidelineId: {type: Schema.Types.ObjectId, ref: 'ResourceGuideline', required: true},
    }
)
