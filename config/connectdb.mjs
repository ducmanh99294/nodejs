import mongoose from "mongoose";

export function connectDB() {
    mongoose
        .connect("mongodb+srv://nguyenducmanh1809:manh1234@cluster0.1ya4y.mongodb.net/ontap?retryWrites=true&w=majority&appName=Cluster0")
        .then(()=> console.log("Connected"));
}   