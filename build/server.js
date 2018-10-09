'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _Reflection = require('./src/controllers/Reflection');

var _Reflection2 = _interopRequireDefault(_Reflection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)(); // server.js


app.use(_express2.default.json());

app.get('/', function (req, res) {
  return res.status(200).send({ 'message': 'YAY! Congratulations! Your first endpoint is working' });
});

app.listen(3000);
console.log('app running on port ', 3000);

app.post('/api/v1/reflections', _Reflection2.default.create);
app.get('/api/v1/reflections', _Reflection2.default.getAll);
app.get('/api/v1/reflections/:id', _Reflection2.default.getOne);
app.put('/api/v1/reflections/:id', _Reflection2.default.update);
app.delete('/api/v1/reflections/:id', _Reflection2.default.delete);