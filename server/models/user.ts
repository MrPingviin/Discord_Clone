import mongoose from 'mongoose';
const { Schema } = mongoose;

const user_schema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    display_name: {
        type: String,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    registered_at: {
        day: {
            type: Number,
            default: new Date(Date.now()).toLocaleDateString("en-US").split("/")[1]
        },
        month: {
            type: Number,
            default: new Date(Date.now()).toLocaleDateString("en-US").split("/")[0]
        },
        year: {
            type: Number,
            default: new Date(Date.now()).toLocaleDateString("en-US").split("/")[2]
        },
        raw: {
            type: Number,
            default: Date.now()
        }
    },
    birthday: {
        day: {
            type: Number,
            required: true
        },
        month: {
            type: Number,
            required: true
        },
        year: {
            type: Number,
            required: true
        },
        raw: {
            type: Number,
            required: true
        },
    },
    servers: {
        type: Array,
        default: [],
    },
    friends: {
        type: Array,
        default: [],
    },
    friend_requests: {
        type: Array,
        default: [],
    },
    blocked_users: {
        type: Array,
        default: [],
    },
    blocked_by: {
        type: Array,
        default: [],
    },
    profile_picture: {
        type: String,
        default: "/default_avatar.webp"
    },
    permissions: {
        isDiscordStaff: {
            type: Boolean,
            default: false
        },
        isNitroUser: {
            type: Boolean,
            default: false
        }
    }

});

export default mongoose.model("users", user_schema);