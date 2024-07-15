const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

const inventory = require('./routes/inventory.js')
app.use('/inventory',inventory);

app.get('/',(req,res)=>{
    res.send('home page'); 
})

app.listen(PORT,()=>{
    console.log(`app listening on port ${PORT}`)
});