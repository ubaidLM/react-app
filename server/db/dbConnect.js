import mongoose from "mongoose";

const dbConnect = async()=>{
    try {
       await mongoose.connect('mongodb+srv://ubaidullahuoh:ubaidkhan@cluster0.nxtyft1.mongodb.net/')
        console.log(`you are connected succesfully with DB`)
    } catch (error) {
        console.log(`you are not connected` , error)
    }
}

export default dbConnect;