import mongoose from "mongoose";

// const connectDB = async ()=>{

//     mongoose.connection.on('connected', ()=> console.log("Dababase connected"));
//     await mongoose.connect(`${process.env.MONGODB_URI}/mern_auth`);

// }

const connectDB = async ()=>{
    try {
        mongoose.connect(`${process.env.MONGODB_URI}/mern_auth`);
        console.log("Database connected!");
    } catch (error) {
        console.error("Database connection failed!",error.message);
        process.exit(1);
    }
};

export default connectDB;