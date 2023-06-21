import mongoose from "mongoose";

mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://gfcarvalho:f1312190@alura.uag8cj9.mongodb.net/Alura-Curso");

let db = mongoose.connection

export default db;