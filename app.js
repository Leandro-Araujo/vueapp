'use strict'
const http         = require('http');
const express      = require('express');
const path         = require('path');
const favicon      = require('serve-favicon');
const logger       = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');

const routes       = require('./routes/index');
const db           = require('./model/db');

const app          = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', 3000);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', routes);


app.use((req, res)=>{
  res.render('index');
});

const server = http.createServer(app);

server.listen(app.get('port'));
server.on('listening', ()=>{
  console.log('rodando na porta: '+ app.get('port'));
});

module.exports = app;
