"use strict";

var express = require('express');

var Product = require('./models/productModel');

var mongoose = require('mongoose');

var app = express();
app.use(express.json()); //Create server

var PORT = 3000; //ROUTES 

app.get('/', function (req, res) {
  res.status(200).json({
    message: 'Hello from express server'
  });
});
app.post('/products', function _callee(req, res) {
  var Prod;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Product.create(req.body));

        case 3:
          Prod = _context.sent;
          res.status(200).json(Prod);
          _context.next = 11;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0.message);
          res.status(500).json({
            message: _context.t0.message
          });

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}); // mongoose.set('strictQuery', false)

mongoose.connect('mongodb://localhost:27017/').then(function () {
  console.log('Connected to DB'); //run server

  app.listen(PORT, function () {
    console.log('Server Running on ' + PORT);
  });
})["catch"](function (err) {
  return console.log(err);
});
//# sourceMappingURL=index.dev.js.map
