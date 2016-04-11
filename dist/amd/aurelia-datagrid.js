define(['exports', './grid/configuration', './grid/columns/grid-column', './grid/columns/grid-column-button', './grid/columns/grid-column-checkbox', './grid/columns/grid-column-edit', './grid/columns/grid-column-template'], function (exports, _gridConfiguration, _gridColumnsGridColumn, _gridColumnsGridColumnButton, _gridColumnsGridColumnCheckbox, _gridColumnsGridColumnEdit, _gridColumnsGridColumnTemplate) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.configure = configure;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _configuration = _interopRequireDefault(_gridConfiguration);

  Object.defineProperty(exports, 'GridColum', {
    enumerable: true,
    get: function get() {
      return _gridColumnsGridColumn.GridColum;
    }
  });
  Object.defineProperty(exports, 'GridColumnButton', {
    enumerable: true,
    get: function get() {
      return _gridColumnsGridColumnButton.GridColumnButton;
    }
  });
  Object.defineProperty(exports, 'GridColumnCheckbox', {
    enumerable: true,
    get: function get() {
      return _gridColumnsGridColumnCheckbox.GridColumnCheckbox;
    }
  });
  Object.defineProperty(exports, 'GridColumnEdit', {
    enumerable: true,
    get: function get() {
      return _gridColumnsGridColumnEdit.GridColumnEdit;
    }
  });
  Object.defineProperty(exports, 'GridColumnTemplate', {
    enumerable: true,
    get: function get() {
      return _gridColumnsGridColumnTemplate.GridColumnTemplate;
    }
  });

  function configure(aurelia, config) {
    aurelia.globalResources('./grid/grid', './grid/columns/grid-column', './grid/columns/grid-column-button', './grid/columns/grid-column-checkbox', './grid/columns/grid-column-edit', './grid/columns/grid-column-template');

    if (typeof config === 'function') {
      config(_configuration['default']);
    }
  }
});