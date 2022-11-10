const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const mongoose = require('mongoose')
const cors = require("cors")
const app = express();

app.use(bodyParser.json()); 
app.use(cors());
mongoose.connect("mongodb+srv://ShivamKoushik:s%40H9663334444@cluster0.k1qkf.mongodb.net/myResto?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("mongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);

let port = process.env.PORT || 3001
app.listen( port, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3001))
});