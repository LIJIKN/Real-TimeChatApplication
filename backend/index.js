const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("../backend/src/config/db");
const port = process.env.PORT || 3000;
const app = express();

connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const msgRouter = require("../backend/src/routes/msgRoutes");
app.use("/api/msg", msgRouter);


app.listen(port, () => {console.log(`Server running in port ${port}`);
});