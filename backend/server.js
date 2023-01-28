require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const workoutsRoutes = require("./routes/workouts");

//  express app
const app = express();

//  middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//  routes
app.use("/api/workouts", workoutsRoutes);

//  connect to db
mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://arpesh28:arpesh123@bookstore.sbgmnyb.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    //  listen for requests
    app.listen(process.env.PORT, () => {
      console.log(`connected to db & listening to port ${process.env.PORT}...`);
    });
  })
  .catch((err) => {
    console.log("error==>>", err);
  });
