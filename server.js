const express = require('express');
const path = require('path');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./server/config/database');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');

const port = process.env.PORT || 8000
const app = express()

app.use(express.static(__dirname + '/dist'))

// Connect to Mongoose
mongoose.connect(config.database);
let db = mongoose.connection;

db.once('open', () => {
    console.log('Connected to Mongodb');
})

db.on('error', (err) => {
    console.log('DB Error: ' + err);
});

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: 'anystringoftext',
    saveUninitialized: true,
    resave: true
}));


app.use(passport.initialize());
app.use(passport.session());
require('./server/config/passport')(passport);

let auth = require('./server/routes/auth');

app.use('/auth', auth);

app.get('/api/user_data', function (req, res) {
    if (req.user === undefined) {
        res.json({});
    } else {
        res.json({
            username: req.user
        });
    }
});

app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

app.listen(port)
console.log("server started on port " + port)