const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const url = 'mongodb://localhost:27017/Uemo';
//es6 promise implementation
mongoose.Promise = global.Promise;
mongoose.connect(url,{ useNewUrlParser: true }, (err,db)=>{
    if(err){
        console.log(err);
    }
    else {
        console.log('connected to '+ url);
        // db.close();
    }
});

const app = express();


const api = require('./Routes/api');
const port = app.get('port') || 3001;
//middlewares
app.use(logger('dev'));
app.use(bodyParser.json())
//routes


app.use('/api',api);
app.use(function(req, res){
    // res.sendStatus(404);
    res.json({'msg': 'hello boss'} );
 });
//catch 404 eeror forward them to error handler

app.use((req, res, next) => {
const err = new Error('Not Found');
err.status = 404;
next(err);
});
//eroor handler function 
app.use((err,req,res, next) => {
const error = app.get('env') === 'devlopment' ? err : {};
const status = err.status || 500;
// respond to client
res.status(status).json({
    error: {
        message: error.message
    }
})

// respond to ourself
console.error(err);
});



//start the server


app.listen(port, ()=> {console.log(`server is listing the port ${port}`)})







//hello
















//lib.bluebirds
