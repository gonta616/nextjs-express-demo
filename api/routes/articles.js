const express = require('express');
const router = express.Router();
const _ = require('lodash');

const data = [
  {id: 1, title: 'Article1', description: 'Description 1', content: 'content1'},
  {id: 2, title: 'Article2', description: 'Description 2', content: 'content2'},
  {id: 3, title: 'Article3', description: 'Description 3', content: 'content3'},
  {id: 4, title: 'Article4', description: 'Description 4', content: 'content4'},
  {id: 5, title: 'Article5', description: 'Description 5', content: 'content5'},
  {id: 6, title: 'Article6', description: 'Description 6', content: 'content6'},
]

router.get('/', (req, res) => {
  res.json(data);
})

router.get('/:id', (req, res) => {
  const id = req.params.id || 1;
  res.json(_.findKey(data, () => {id: id}))
})

router.post('/', (req, res) => {

})

module.exports = router;