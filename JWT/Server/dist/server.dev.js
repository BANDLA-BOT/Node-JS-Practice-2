"use strict";

var express = require('express');

var mongoose = require('mongoose');

var cors = require('cors');

var User = require('./Models/userModel');

require('dotenv').config();

var app = express(); //Middlewares

app.use(express.json());
app.use(cors()); //PORT

var PORT = 8000; //Routes

app.get('/', function (req, res) {
  res.send('Hello from server');
});
app.post('/api/register', function _callee(req, res) {
  var user;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
          }));

        case 3:
          user = _context.sent;
          res.json({
            status: "ok"
          });
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.json({
            status: "error",
            error: " Duplicate email"
          });

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
app.post('/api/loign', function _callee2(req, res) {
  var user;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(User.findOne({
            email: req.body.email,
            password: req.body.password
          }));

        case 2:
          user = _context2.sent;

          if (!user) {
            _context2.next = 7;
            break;
          }

          return _context2.abrupt("return", res.json({
            status: 'ok',
            user: true
          }));

        case 7:
          return _context2.abrupt("return", res.json({
            status: 'Error',
            user: false
          }));

        case 8:
        case "end":
          return _context2.stop();
      }
    }
  });
});
mongoose.connect('mongodb://localhost:27017/MERN');
app.listen(PORT, function () {
  console.log('Server running on PORT ' + PORT);
});
//# sourceMappingURL=server.dev.js.map
