const express = require("express");
const users = require('./db.json')
const app = express(); 

const port = process.env.PORT || 3000;
app.get('/api/users', (req, res) => {

    res.json(users)
 
 });
app.get('/api/users/:id', (req, res) => {

    res.json(users.find(user => user.id === Number(req.params.id)))
});




app.get("/supphawit", (req, res) => {
    res.send("Hello! My name is Supphawit");
});



app.listen(port, () => {
    console.log("Server running at http://127.0.0.1:" + port + '/supphawit');
    console.log("Server running at http://127.0.0.1:" + port + '/api/users');

});
