const express = require('express');
//import the ds.js file
const dbHelper = require('../data/db');

const router = express.Router();

router.get('/', (req, res) =>{
    res.status(200).send('hi from the GET /comments endpoint.')
});

router.get('/:id', (req, res) =>{
    const id = req.params.id;
    res.status(200).send('hi from the GET /comments/${id} endpoint.')
});

router.post('/:id', (req, res) =>{
    const id = req.params.id;
    res.status(200).send('hi from the POST /comments/${id} endpoint.')
});

router.put('/:id', (req, res) =>{
    const id = req.params.id;
    res.status(200).send('hi from the PUT /comments/${id} endpoint.')
});

router.delete('/:id', (req, res) =>{
    const id = req.params.id;
    res.status(200).send('hi from the DELETE /comments/${id} endpoint.')
})

// like export default...
module.exports = router;