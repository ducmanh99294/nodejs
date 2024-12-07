import mongoose from "mongoose";
const Schema = mongoose.Schema;
const reservationSchema = new Schema({
    user_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    services: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Service', 
        required: true 
    },
    date: { 
        type: Date, 
        required: true 
    },
    time: { 
        type: String, 
        required: true 
    },
    number_of_people: { 
        type: Number, 
        required: true, 
        min: 1, 
        max: 100 
    },
});

const reservations = mongoose.model('Reservation', reservationSchema);
export default reservations;
