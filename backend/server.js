import express from "express";
import mongoose from "mongoose";
import data from "./data.js"; // It is very important to give the extenesion in the server programming
import userRouter from "./router/userRouter.js";

const app = express();
// mongoose needs two parameters, one is the location and another for the options
mongoose.connect("mongodb://localhost/amazona", {
  useNewUrlParser: true, // this is to get rid of the deprecated warnings
  useUnifiedTopologyL: true,
  useCreateIndex: true,
});
// Now we are connected to the MongoDB database

app.get("/api/products/:id", (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product not Found!" });
  }
});

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.send("Server is ready!");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server at https://localhost:${port}`);
});
