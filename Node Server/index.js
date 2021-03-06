const cors = require('cors');
var express= require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var routes = require('./Routers/index1');

var port = process.env.YOUR_PORT || process.env.PORT ||8900;
var hostname =  process.env.YOUR_HOST || '0.0.0.0'||"localhost";
const app = express();
app.use(cors());
app.options('*',cors());
app.use(bodyParser.json());

app.use('/', routes);

mongoose.connect(process.env.MONGO_URI||'mongodb+srv://akash:2go14cs001@cluster0.waiho.mongodb.net/TestDB?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(
        app.listen(process.env.PORT|| port, hostname, () => {
            console.log("Server is running on " + hostname + ":" + port);
        })
    ).catch(err => console.log(err));

