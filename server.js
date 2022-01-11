const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb+srv://Pajkos98:Pajkos98@cluster0.suln3.mongodb.net/mern-crud-01?retryWrites=true&w=majority')
    .then(() => {
        console.log('Sikeres csatlakozás az adatbázishoz!');
    })
    .catch((error) => {
        console.log(error.message);
    });

app.use(express.json());
app.use(cors());
app.use('/book', require('./routes/BookRoute'));

app.listen(5000, console.log('Fut a szerver!'));