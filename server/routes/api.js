const express = require('express');
const router = express.Router();

router.get('/ping', (req, res) => {
    res.send('Request received: ' + req.body);
})

let response = {
    status: 200,
    data: [],
    message: null
};

router.get('/data', (req, res) => {
    response.data = [
        {
            name: 'name 1',
            phone: '(555) 555-5555'
        },
        {
            name: 'name 2',
            phone: '(555) 555-5555'
        },
        {
            name: 'name 3',
            phone: '(555) 555-5555'
        },
        {
            name: 'name 4',
            phone: '(555) 555-5555'
        }
    ];
    res.json(response);
})

module.exports = router;