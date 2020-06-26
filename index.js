const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

// connect to database
connectDB();

app.use(cors());

// Log the requests
app.use((req, res, next) => {
    console.log(`${new Date().toString()}   ${req.method}   ${req.host}   ${req.hostname}   ${req.url}`);
    next();
})

app.use(express.json({ extented: false }));

// app.use(express.static('public'));

// Define Routes
app.use('/cap', require('./routes/cap'));



// let allowedOrigins = [`http://localhost:${PORT}`,
//     'https://giveaway.geekofia.in'];

// app.use(cors({
//     origin: function (origin, callback) {
//         // allow requests with no origin 
//         // (like mobile apps or curl requests)
//         if (!origin) return callback(null, true);
//         if (allowedOrigins.indexOf(origin) === -1) {
//             var msg = 'The CORS policy for this site does not ' +
//                 'allow access from the specified Origin.';
//             return callback(new Error(msg), false);
//         }
//         return callback(null, true);
//     }
// }));
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`server is listening on ${PORT}`));