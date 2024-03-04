const express = require("express");
const app = express();
const mongoose = require("mongoose");
const formDta = require("./routes/Form")
const messageRecived = require("./routes/Message")

const cors = require('cors');
const messageRecive = require("./models/Messages");
// mongoose.connect('mongodb://localhost:27017')
mongoose.connect('mongodb+srv://soniakhan7393:7393852432@cluster0.iq7cien.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

app.use(cors());
app.use(express.json());
app.use("/", formDta);
app.use("/", messageRecived);



app.listen(5000);