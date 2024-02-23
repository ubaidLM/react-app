import express from 'express';
import route from './routing/userRoutering.js';
import dbConnect from './db/dbConnect.js';

const app = express();
const PORT = 8080;
app.use(express.json())
dbConnect();
app.use('/user',route)


app.listen(PORT,()=>{
    console.log(`you server is running on this location http://localhost:${PORT}`)
})