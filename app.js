import env from "dotenv";
import express from "express";
import errors from "./middleware/middleErrors";

env.config();
const PORT = process.env.PORT;

const app = express();
app.use(express.json());

app.use(errors)

app.listen(PORT, () => {
    console.log(`App start running on port ${PORT} ...`);
});
