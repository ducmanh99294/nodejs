import mongoose from "mongoose";
const Schema = mongoose.Schema;
const servicesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    });
const Services = mongoose.model('Services', servicesSchema);
export default Services



