'use strict';

var _templateObject = _taggedTemplateLiteral(['\n      color: blue;\n    '], ['\n      color: blue;\n    ']),
    _templateObject2 = _taggedTemplateLiteral(['\n      background: green;\n    '], ['\n      background: green;\n    ']);

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var styled = void 0;

describe('extending styled', function () {
  beforeEach(function () {
    styled = (0, _utils.resetStyled)();
  });

  it('should append extended styled to the original class', function () {
    var Base = styled.div(_templateObject);
    var Extended = Base.extend(_templateObject2);

    var b = new _vue2.default(Base).$mount();
    var e = new _vue2.default(Extended).$mount();

    (0, _utils.expectCSSMatches)('.a {color: blue;} .b {color: blue;background: green;}');
  });
});