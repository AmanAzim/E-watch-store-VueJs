'use strict';

var _templateObject = _taggedTemplateLiteral(['\n      color: blue;\n    '], ['\n      color: blue;\n    ']);

var _vue = require('vue/dist/vue');

var _vue2 = _interopRequireDefault(_vue);

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _StyleSheet = require('../models/StyleSheet');

var _StyleSheet2 = _interopRequireDefault(_StyleSheet);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var styled = void 0;

describe('component features', function () {
  beforeEach(function () {
    styled = (0, _utils.resetStyled)();
  });

  it('default slot', function () {
    var Comp = {
      template: '<div><slot>FallbackContent</slot></div>'
    };
    var StyledComp = styled(Comp)(_templateObject);
    var vm = new _vue2.default({
      components: { StyledComp: StyledComp },
      template: '<styled-comp>ActualContent</styled-comp>'
    }).$mount();
    (0, _expect2.default)(vm.$el.innerHTML).toEqual('ActualContent');
  });
  it('named slot', function () {
    var Comp = {
      template: '<div><slot name=\'content\'>FallbackContent</slot></div>'
    };
    var StyledComp = styled(Comp)(_templateObject);
    var vm = new _vue2.default({
      components: { StyledComp: StyledComp },
      template: '\n        <styled-comp>\n          <template slot=\'content\'>ActualContent</template>\n        </styled-comp>'
    }).$mount();
    (0, _expect2.default)(vm.$el.innerHTML).toEqual('ActualContent');
  });
  it('scoped slot', function () {
    var Comp = {
      template: '<div><slot :p=\'"ActualContent"\'>FallbackContent</slot></div>'
    };
    var StyledComp = styled(Comp)(_templateObject);
    var vm = new _vue2.default({
      components: { StyledComp: StyledComp },
      template: '\n        <styled-comp>\n          <template scope=\'{ p }\'>{{ p }}</template>\n        </styled-comp>'
    }).$mount();
    (0, _expect2.default)(vm.$el.innerHTML).toEqual('ActualContent');
  });
  it('named scoped slot', function () {
    var Comp = {
      template: '<div><slot name=\'content\' :p=\'"ActualContent"\'>FallbackContent</slot></div>'
    };
    var StyledComp = styled(Comp)(_templateObject);
    var vm = new _vue2.default({
      components: { StyledComp: StyledComp },
      template: '\n        <styled-comp>\n          <template slot=\'content\' scope=\'{ p }\'>{{ p }}</template>\n        </styled-comp>'
    }).$mount();
    (0, _expect2.default)(vm.$el.innerHTML).toEqual('ActualContent');
  });
});