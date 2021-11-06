// import express from "express";
// const cors = require("cors");
// const mongoose = require("mongoose");

// require("dotenv").config();

// const app = express();
// const port = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// const uri = process.env.ATLAR_URI;
// mongoose.connect(uri, {});
// const connection = mongoose.connection;
// connection.once("open", () => {
//   console.log("MongoDB database connected!");
// });

// const candidatesRouter = require("./routes/candidates");

// app.use("/candidates", candidatesRouter);

// app.listen(port, () => {
//   console.log(`Server is running on port: ${port}`);
// });

import express from "express";
import cors from "cors";
import candidates from "./routes/candidates.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/candidates", candidates);
app.use("*", (req, res) => res.status(404).json({ error: "not found" }));

export default app;
