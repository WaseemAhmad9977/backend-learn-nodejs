// let a = 5
// let b = 7

// const c= a+b;

// console.log(c);

// import utils from './utils'-->but that is a es6 syntax


// const {multiply} = require('./utils') //this is common js syntax --> used in nodejs
// const utils = require('./utils');
// const {multiply,log}=require("./utils")

// // console.log(utils.multiply(3,4));
// console.log(multiply(3,4));

// log.warning("this is just info");
// log.error("this will be an error");


// -------------------------------------now starting with express--------------------------------

const express = require('express');


const app = express();
app.use(express.json());


app.get('/user', (req, res) => {
    console.log("user was called");
    // res.send('hello user updated')
    // res.send({
    //     name: "waseem",
    //     age: 22
    // })
    res.json({
        name: "waseem",
        age: 22
    })

});




app.get('/', (req, res) => {
    // console.log("this is my server")
    // res.send('the server is running');
    // res.sendFile('D:/AnujNodePractice/index.html'); one way

    // res.sendFile(
    //     __dirname + "/index.html"
    // )
    res.json({
        sucess: true,
    })
})

app.get('/random', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    res.json({
        Number: randomNumber,
    })
})

app.post('/user', (req, res) => {
    console.log(req.body);
    res.json({
        name: 'shivam',
        age: 23,
        multiplyResult: req.body.a * req.body.b
    })
})


app.listen(4000, () => {
    console.log("listening on the port:4000");
})


// -----------------------post api--------------------

// app.post('/sum',(req,res)=>{
//      console.log(req.body),
//      res.json({
         
//      })

// })




