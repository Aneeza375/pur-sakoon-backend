import express from 'express';
import cors from 'cors';
import router from './router/Appointment.js';
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//router

app.use("/api/v1", router);


export default app;
