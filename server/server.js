require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/auth/auth-routes");
mongoose
  .connect(
    "mongodb+srv://Ecommerce:pv8AxKupwdqa8NoE@cluster0.auwldlr.mongodb.net/"
  )
  .then(() => console.log("Mongodb connected"))
  .catch((error) => console.log(error));

const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRouter);
app.listen(port, () => {
  console.log(`server is running PORT ${port}`);
});
