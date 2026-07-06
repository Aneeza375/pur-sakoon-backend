import app from "./server/app.js";
import dotenv from 'dotenv';


dotenv.config(
    {
        path: "./.env"
    }
);
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})