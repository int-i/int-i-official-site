import mongoose from "mongoose";

const intiSchema = new mongoose.Schema({
    username: String,
    studentId: {
        type: Number,
        required: true,
        unique: true
    }
});

const Inti = mongoose.model("inti", intiSchema);
export default Inti;