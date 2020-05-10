const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([req.method , req.path, JSON.stringify(req.params), JSON.stringify(req.query), req.statusCode].join(","));
});

router.get('/:id', (req, res) => {
  res.json([req.method , req.path, JSON.stringify(req.params), JSON.stringify(req.query), req.statusCode].join(","));
});

router.post('/', (req, res) => {
  res.json([req.method , req.path, JSON.stringify(req.body)].join(","));
});

module.exports = router;