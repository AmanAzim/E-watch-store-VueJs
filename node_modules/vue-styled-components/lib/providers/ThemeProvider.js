'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'ThemeProvider',
  props: {
    theme: Object
  },
  provide: function provide() {
    return {
      theme: this.theme
    };
  },

  render: function render(createElement) {
    return createElement('div', {}, this.$slots.default);
  }
};
module.exports = exports['default'];