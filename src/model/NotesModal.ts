import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const noteSchema = new Schema({
        note: {
            type: String,
            require: true,
        },
        displayName: {
            type: String,
            require: false,
            default: "Anonymous"
        }
    },
    {
        timestamps: true
    }
);

export default mongoose.model("Notes", noteSchema);