import express from "express";
import cors from "cors";
import averageRoute from "./routes/averageRoute.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/", averageRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
