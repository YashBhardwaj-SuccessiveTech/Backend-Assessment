import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db";
import router from "./routes/studentroutes";

dotenv.config();
connectDB();

const port =  process.env.PORT || 8080;
const app = express();

app.use(express.json());

app.use(router);

app.listen(port, ()=>{
    console.log(`Server is listening on ${port}`);
}); 