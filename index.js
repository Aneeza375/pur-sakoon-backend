import app from "./server/app.js";
import dotenv from 'dotenv';

dotenv.config({
    path: "./.env"
});

export default app;
