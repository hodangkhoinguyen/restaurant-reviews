import express from "express"
import cors from "cors"
import restaurants from "./api/restaurants.route.js"

// express = require('express')
// cors = require('cors')
// restaurants = require('./api/restaurants.route.js')

const app = express();

/*
allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
provides a Connect/Express middleware that can be used to enable CORS with various options
*/
app.use(cors()); 
app.use(express.json()); //get json

app.use("/api/v1/restaurants", restaurants);
app.use("*", (req, res) => res.status(404).json({err: "not found"}));

export default app
// module.exports = app