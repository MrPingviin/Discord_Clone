import mongoose from 'mongoose';
const { Schema } = mongoose;

const client_session_schema = new Schema({
    token: {
        type: String,
        required: true,
        unique: true,
    },
    validTill: {
        type: Number,
        required: true,
    }
});

export default mongoose.model("client_sessions", client_session_schema);