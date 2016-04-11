'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.configure = configure;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _gridConfiguration = require('./grid/configuration');

var _gridConfiguration2 = _interopRequireDefault(_gridConfiguration);

var _gridColumnsGridColumn = require('./grid/columns/grid-column');

Object.defineProperty(exports, 'GridColum', {
  enumerable: true,
  get: function get() {
    return _gridColumnsGridColumn.GridColum;
  }
});

var _gridColumnsGridColumnButton = require('./grid/columns/grid-column-button');

Object.defineProperty(exports, 'GridColumnButton', {
  enumerable: true,
  get: function get() {
    return _gridColumnsGridColumnButton.GridColumnButton;
  }
});

var _gridColumnsGridColumnCheckbox = require('./grid/columns/grid-column-checkbox');

Object.defineProperty(exports, 'GridColumnCheckbox', {
  enumerable: true,
  get: function get() {
    return _gridColumnsGridColumnCheckbox.GridColumnCheckbox;
  }
});

var _gridColumnsGridColumnEdit = require('./grid/columns/grid-column-edit');

Object.defineProperty(exports, 'GridColumnEdit', {
  enumerable: true,
  get: function get() {
    return _gridColumnsGridColumnEdit.GridColumnEdit;
  }
});

var _gridColumnsGridColumnTemplate = require('./grid/columns/grid-column-template');

Object.defineProperty(exports, 'GridColumnTemplate', {
  enumerable: true,
  get: function get() {
    return _gridColumnsGridColumnTemplate.GridColumnTemplate;
  }
});

function configure(aurelia, config) {
  aurelia.globalResources('./grid/grid', './grid/columns/grid-column', './grid/columns/grid-column-button', './grid/columns/grid-column-checkbox', './grid/columns/grid-column-edit', './grid/columns/grid-column-template');

  if (typeof config === 'function') {
    config(_gridConfiguration2['default']);
  }
}