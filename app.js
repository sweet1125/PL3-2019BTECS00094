const express = require('express');
const app = express();
const path = require('path');


app.use(express.static(__dirname + '/Resume'));
app.use(express.static(__dirname + '/PL3_5A'));
app.use(express.static(__dirname + '/PL3_5B'));
app.use(express.static(__dirname + '/pracLink'));


app.listen('8000',()=>{
    console.log(`listening at port 8000`);
});
console.log('working on 8000');