import mongoose from "mongoose";
import { nanoid } from "nanoid";

//creating schema
const shortUrlSchema = new mongoose.Schema({
    fullUrl: {
        type: String,
        require: true
    },
    shortUrl: {
        type: String,
        require: true,
        default: () => nanoid().substring(0, 10),
    },
    clicks: {
        type: Number,
        default: 0
    }
},{
    timestamps: true
})

//creating model in MongoDB
export const urlModel = mongoose.model("ShortUrl", shortUrlSchema);