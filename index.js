const express = require('express');

const server = express();
server.use(express.json());

const Cars = require('./data/carsdb.js')

server.post('/cars', (req, res) => {
    Cars.insert(req.body)
        .then(car => {
            res.status(201).json(car);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: "There was an error while saving the car to the database"})
        });
});

server.get('/cars', (req, res) => {
    Cars.get()
        .then(cars => {
            res.status(200).json(cars);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: 'Error retrieving data',
            });
        });
});


const port = 8000;
server.listen(port, () => console.log(`\n=== Server listening on port ${port} ===\n`));
