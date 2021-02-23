const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const db = require('./models');
const { User }  = require('./models');

// app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/select', (req, res) => {
    User.findAll().then((user) => {
       res.send(user)
   }).catch((err) => {
        if (err) {
            throw err;
        }
    });
});

app.post('/insert', (req, res) => {
    User.create({
        firstName: req.body.firstName,
        age: req.body.age
    }).then(result => {
        res.send(result)
    }).catch((err) => {
        if (err) {
            throw err;
        }
    });
    res.send('inserted');
})

app.get('/delete', (req, res) => {
    User.destroy({
        where: { id: 11 }
    }).catch((err) => {
        if (err) {
            throw err;
        }
    });
    
})

db.sequelize.sync().then((req) => {
    app.listen(port, ()=>{console.log('Running on Port ' + port);}) 
})
