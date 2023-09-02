var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', message: messages });
});


router.post("/new", function (req, res, next) {
  const description = req.body.message;
  const username = req.body.username;

  messages.push({
    text: description,
    user: username,

  });
  res.redirect("/");
});


module.exports = router;
