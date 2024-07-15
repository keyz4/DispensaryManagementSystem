const express = require('express');
const dotenv = require('dotenv');
const app = express();
const PORT = process.env.PORT || 5000;
const connectToMongoDB = require("./db/connectToMongoDB.js");
var cors = require('cors');
const inventory = require('./routes/inventory.js')

connectToMongoDB();
app.use(cors());

var corsOptions = {
    origin: 'http://example.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use('/inventory', inventory);

app.get('/', (req, res)=>{
    res.send('Home Page'); 
})

app.listen(PORT, ()=>{
    console.log(`App is listening on port ${PORT}`)
});