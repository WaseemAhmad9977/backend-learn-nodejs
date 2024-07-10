require('dotenv').config({ path: './.env' });

const express = require('express');


// const postRouter = require('./routes/post'); // Correct path to post.js
// const authRouter= require('./routes/auth')
const mainRouter = require('./routes/index');

// Log the type of postRouter to verify it's a function
console.log(typeof postRouter); // Should print 'function'

const app = express();
app.use(express.json())
const dbConnect = require('./dbConnect');

// Ensure the router is correctly imported and used

// function middleWare1(req,res,next){
// }

app.use((req, res, next) => {
    console.log(req.method, req.url, new Date().toTimeString());
    next();
    // if (req.body && req.body.name === 'waseem') {
    //     next();
    // }
    // else {
    //     res.send('not allowed')
    // }
})

app.use('/api', mainRouter);


app.get('/', (req, res) => {
    res.send({
        data: 'ok'
    });
});

const PORT = process.env.PORT;
const API_KEY = process.env.SECRET_API_KEY;

dbConnect();

app.listen(PORT, () => {
    console.log('app listening on port', PORT, API_KEY);
});












