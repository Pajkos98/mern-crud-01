const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb+srv://petruszka:pepe1973@cluster0.tmbwc.mongodb.net/mern-crud?retryWrites=true&w=majority')
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