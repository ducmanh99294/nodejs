import mongoose from "mongoose";
const Schema = mongoose.Schema

const bookSchema = new Schema({
    customName: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        require: true
    },
    time:{
        type: String,
        require: true
    },
    role: {
        type: String,
        default: "Pending",
        enum: ["Pending","Confirmed","Cancelled"]
}
})

const Booking = mongoose.model("booking",bookSchema);
export default Booking