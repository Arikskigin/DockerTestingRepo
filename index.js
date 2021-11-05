const express = require('express')
const app = express()

const port = 3000;

app.listen(port, () => {
    console.log(`app is listening at http://localhost:${port}`)
});

app.get('/start' , function(req, res){
    res.json({"start" : "Hello"});
});

app.use(express.urlencoded({
    extended:true
}));

app.post('/username' , function(req, res){
    console.log(req.body.start);
    res.send(req.body.start);
});