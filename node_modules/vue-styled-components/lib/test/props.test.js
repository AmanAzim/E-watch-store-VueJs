'use strict';

var _templateObject = _taggedTemplateLiteral(['\n      color: ', ';\n    '], ['\n      color: ', ';\n    ']);

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _utils = require('./utils');

var _ThemeProvider = require('../providers/ThemeProvider');

var _ThemeProvider2 = _interopRequireDefault(_ThemeProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var styled = void 0;

describe('props', function () {
  beforeEach(function () {
    styled = (0, _utils.resetStyled)();
  });

  it('should execute interpolations and fall back', function () {
    var compProps = { fg: String };
    var Comp = styled('div', compProps)(_templateObject, function (props) {
      return props.fg || 'black';
    });
    var vm = new _vue2.default(Comp).$mount();
    (0, _utils.expectCSSMatches)('.a {color: black;}');
  });

  it('should execute interpolations and inject props', function () {
    var compProps = { fg: String };
    var Comp = styled('div', compProps)(_templateObject, function (props) {
      return props.fg || 'black';
    });
    var Ctor = _vue2.default.extend(Comp);
    var vm = new Ctor({
      propsData: {
        fg: 'red'
      }
    }).$mount();
    (0, _utils.expectCSSMatches)('.a {color: red;}');
  });

  it('should add any injected theme to the component', function () {
    var theme = {
      blue: "blue"
    };

    var Comp = styled.div(_templateObject, function (props) {
      return props.theme.blue;
    });
    var Themed = {
      render: function render(createElement) {
        return createElement(_ThemeProvider2.default, {
          props: {
            theme: theme
          }
        }, [createElement(Comp)]);
      }
    };

    var vm = new _vue2.default(Themed).$mount();
    (0, _utils.expectCSSMatches)('.a {color: blue;}');
  });
});