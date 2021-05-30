// creating the router

import express from "express";
import data from "../data.js";
import User from "../models/userModel.js";

const userRouter = express.Router(); // Router() helps makes the code moduler.
// instead of having all the routes in the server.js we can define multiple files to have our routers.

userRouter.get("/seed", async (req, res) => {
  // creating a seed API
  // the nature of mongose operation is async, so we need to define the async function.
  const createUsers = await User.insertMany(data.users);
  res.send({ createUsers });
});

// Now the last step is to connect the database in MongoDB. This will be done in the server.js

export default userRouter;
