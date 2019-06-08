'use strict';

var _templateObject = _taggedTemplateLiteral(['\n      from {\n        transform: rotate(0deg);\n      }\n\n      to {\n        transform: rotate(360deg);\n      }\n    '], ['\n      from {\n        transform: rotate(0deg);\n      }\n\n      to {\n        transform: rotate(360deg);\n      }\n    ']);

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _keyframes = require('../constructors/keyframes');

var _keyframes2 = _interopRequireDefault(_keyframes);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var styled = void 0;

describe('css features', function () {
  beforeEach(function () {
    styled = (0, _utils.resetStyled)();
  });

  it('should add vendor prefixes in the right order', function () {
    var Comp = (0, _keyframes2.default)(_templateObject);

    var vm = new _vue2.default(Comp).$mount();
    (0, _utils.expectCSSMatches)('@keyframes iVXCSc { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }');
  });
});