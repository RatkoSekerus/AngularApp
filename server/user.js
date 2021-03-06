var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();

var users = {};

router.post('/login', (req, res) => {
  var user = req.body;
  if (users[user.username] && users[user.username] === user.password) {
    res.json({
      msg: 'Uspesno ste se ulogovali',
      token: jwt.sign({user: user.username}, 'SECRET')
    });
  } else {
    res.status(400).json({msg: 'Netacan username ili lozinka'});
  }
});

router.post('/register', (req, res) => {
  var user = req.body;
  if (users[user.username]) {
    res.status(400).json({msg: 'User already exists, please login.'});
  } else {
    users[user.username] = user.password;
    res.json({
      msg: 'Successfully created user, please login'
    });
  }
});

module.exports = router;
