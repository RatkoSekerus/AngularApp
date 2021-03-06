var express = require('express')
var router = express.Router();

const rasporeds = [
  {day: 'Ponedeljak', code: '1', beginTime: '19h', endTime: '20h', description: 'Ponedeljkom na treningu se radi kondicija, vezbe snage, vezbe izdrzljivosti i eksplozivnost', favorite: false},
  {day: 'Utorak', code: '2', beginTime: '19h', endTime: '20h', description: 'Utorkom na treningu se radi tehnika, borbe sa zamisljenim protivnikom i kontrakcija', favorite: false},
  {day: 'Sreda', code: '3', beginTime: '19h', endTime: '20h', description: 'Sredom na treningu se rade slobodni sparinzi i dogovoreni sparinzi', favorite: false},
];

router.get('/', (req, res) => {
  var query = (req.query['q'] || '').toLowerCase();
  if (query) {
    const foundRasporeds = rasporeds.filter(
      (raspored) => raspored.day.toLowerCase().indexOf(query) != -1);
    return res.status(200).json(foundRasporeds);
  }
  return res.status(200).json(rasporeds);
});

router.get('/:code', (req, res) => {
  let rasporedCode = req.params.code;
  let foundRaspored = rasporeds.find(each => each.code === rasporedCode);
  if (foundRaspored) {
    return res.status(200).json(foundRaspored);
  }
  return res.status(400).json({msg: 'Raspored with code ' + rasporedCode + ' not found!'});
});

router.post('/', (req, res) => {
  let raspored = req.body;
  let foundRaspored = rasporeds.find(each => each.code === raspored.code);
  if (foundRaspored) {
    return res.status(400)
        .json({msg: 'Raspored with code ' + raspored.code + ' already exists'});
  }
  rasporeds.push(raspored);
  return res.status(200).json({msg: 'Raspored with code ' + raspored.code + ' successfully created'});
});



router.patch('/:code', (req, res) => {
  let rasporedCode = req.params.code;
  let foundRaspored = rasporeds.find(each => each.code === rasporedCode);
  if (foundRaspored) {
    foundRaspored.beginTime = req.body.beginTime;
    foundRaspored.endTime = req.body.endTime;
    msg = 'ok';
    return res.status(200).json({msg: msg});
  }
  return res.status(400).json({msg: 'Raspored with code ' + rasporedCode + ' not found!'});
});

module.exports = router;
