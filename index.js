const { log } = require('console');
const express = require('express')
const app = express()
var bodyParser = require('body-parser')

const { v4: uuidv4 } = require('uuid');
var generate = require('project-name-generator');

app.use(bodyParser.json())//Middelware 


var _data = [{ id: 1, name: 'clara' }];


app.get('/', function (req, res) {
    res.send('Hi clara!')
})

app.get('/clara', function (req, res) {
    res.send([{ id: 1, name: 'clara' }])
})

app.get('/Students', (req, res) => {
    console.log(req.query);
    if (req.query.id > 0) {
        _data.push({ id: req.query.id, name: req.query.name })
    }

    res.send(_data)
})


app.post('/AddStudents', (req, res) => {
    //console.log(req.query.id);
    //if (req.query.id > 0) {
    //_data.push({ id: req.query.id, name: req.query.name })
    //_data.push({id:uuidv4(), name:generate().spaced})
    //}

    //console.log(req)
    _data.push(req.body)
    console.log(_data);

    res.send(_data)
})



app.listen(1234)