import express from 'express';
import Register from '../controller/userController.js';

const route = express.Router();

route.post('/',Register);

export default route