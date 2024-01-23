import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
        default: "https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/288787112_3088910957988344_8640517410726489410_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=g-0qmOcZ_DQAX8gp9aX&_nc_ht=scontent.fhan3-3.fna&oh=00_AfDsaqCwR-wOK1nDiSo3ZBseAuXBNrRFzJc7hRrbYyx4NQ&oe=65B446BE",
    },
    }, {timestamps: true}
);

const User = mongoose.model('User',userSchema);

export default User;