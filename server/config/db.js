const mongoose = require('mongoose');
require("dotenv").config({ path: "./config.env"});

const connectDB = async () =>{
    return mongoose
    .connect(process.env.MONGODB_URL || "mongodb+srv://pamithapankaja:pamitha7890@cluster0.1tmigvh.mongodb.net/ToDoApp")
    .then(() => console.log(`connection to databse established`))
    .catch((err) => console.log(err))
};

module.exports = connectDB
