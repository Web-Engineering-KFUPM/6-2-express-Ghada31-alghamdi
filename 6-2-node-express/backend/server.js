import express from "express";
import cors from "cors";
import { getRandomQuote } from "./quotes.js";
const PORT=3000;
const app = express();


app.use(cors());


{/*write code to define routes*/}


app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });