const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

router.get('/ping', (req, res) => {
  res.send('Request received: ' + req.body);
})

let response = {
  status: 200,
  data: [],
  message: null
};

router.get('/data', (req, res) => {
  let data = dataController.getData();
  res.json(data);
})

initialize();

module.exports = router;
