const express = require('express');
const connectDB = require('./config/db');

const app = express();

// connect to database
connectDB();

// Log the requests
app.use((req, res, next) => {
    console.log(`${new Date().toString()}   ${req.method}   ${req.host}   ${req.hostname}   ${req.url}`);
    next();
})

app.use(express.json({ extented: false }));

// app.use(express.static('public'));

// Define Routes
app.use('/cap', require('./routes/cap'));

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`server is listening on ${PORT}`));