'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _StyleSheet = require('../models/StyleSheet');

var _StyleSheet2 = _interopRequireDefault(_StyleSheet);

var _hash = require('glamor/lib/hash');

var _hash2 = _interopRequireDefault(_hash);

var _generateAlphabeticName = require('../utils/generateAlphabeticName');

var _generateAlphabeticName2 = _interopRequireDefault(_generateAlphabeticName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var replaceWhitespace = function replaceWhitespace(str) {
  return str.replace(/\s|\\n/g, '');
};

var makeAnimation = function makeAnimation(name, css) {
  return '\n@keyframes ' + name + ' {\n   ' + css + '\n}\n';
};

exports.default = function (css) {
  var name = (0, _generateAlphabeticName2.default)((0, _hash2.default)(replaceWhitespace(JSON.stringify(css))));

  var animation = makeAnimation(name, css);

  _StyleSheet2.default.insert(animation);

  return name;
};

module.exports = exports['default'];