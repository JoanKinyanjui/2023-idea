const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI ;
const appRoutes = require('./routes/routes');
const cors = require('cors');
const bodyParser = require('body-parser');

// middleware
app.use(cors({origin: true, credentials: true}));
app.use(express.json())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// Connect to DataBase...
mongoose.set("strictQuery", false);
mongoose.connect(MONGO_URI).then((result)=>
app.listen(3000,()=>{ console.log('Db connection successful and server running on port 3000...')})
)
.catch((err)=> console.log(err));
app.use(appRoutes);