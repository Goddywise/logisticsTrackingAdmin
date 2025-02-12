const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
require('dotenv').config();
require('./DB_connnection/db');

//Importing pages routes
const homeRoute = require("./routes/pagesRoutes/homeRoute");
const dashboardRoute = require("./routes/pagesRoutes/dashboardRoute");
const updatePageRoute = require("./routes/pagesRoutes/updatePageRoute");

//Importing Routes for Operations
const getAllShippmentRoute = require("./routes/getAllShippment");
const createShipment = require("./routes/creatShippment");
const clientsRoute = require("./routes/userRoute");
const adminRoute = require("./routes/adminUser");
const trackRoutes = require("./routes/trackParcel");
const updateRoute = require("./routes/updateRoute");
const deleteRoute = require("./routes/deleteParcel");
const getParcelAndUpate = require("./routes/getParcelAndUpdate");


app.use([cors(), bodyParser.json(), express.static(__dirname)]);//Middleware

//Using imported page routes
app.use("", homeRoute); // Home login route
app.use("/dashboard", dashboardRoute); // Home login route
app.use("/dashboard/admin", updatePageRoute); //Update route

//Using all imported Operations routes
app.use("/db", getAllShippmentRoute); //Getting shippment details
app.use("/createShippment", createShipment); //Allow parcels by Admin
app.use("/adminUser", adminRoute); //Allows admin to login.
app.use("/user", clientsRoute); //Allowed users to create account via UI.
app.use("/track", trackRoutes); //Track route
app.use("/", getParcelAndUpate); //Get data into input field to update
app.use("/",updateRoute ),
app.use("/admin",deleteRoute )

app.listen(process.env.PORT || 8080, () => {
  console.log(`Server running on http://localhost:${process.env.PORT || 8080}`);
});
