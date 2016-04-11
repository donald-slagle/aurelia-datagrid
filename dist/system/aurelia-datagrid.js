System.register(['./grid/configuration', './grid/columns/grid-column', './grid/columns/grid-column-button', './grid/columns/grid-column-checkbox', './grid/columns/grid-column-edit', './grid/columns/grid-column-template'], function (_export) {
  'use strict';

  var configuration;

  _export('configure', configure);

  function configure(aurelia, config) {
    aurelia.globalResources('./grid/grid', './grid/columns/grid-column', './grid/columns/grid-column-button', './grid/columns/grid-column-checkbox', './grid/columns/grid-column-edit', './grid/columns/grid-column-template');

    if (typeof config === 'function') {
      config(configuration);
    }
  }

  return {
    setters: [function (_gridConfiguration) {
      configuration = _gridConfiguration['default'];
    }, function (_gridColumnsGridColumn) {
      _export('GridColum', _gridColumnsGridColumn.GridColum);
    }, function (_gridColumnsGridColumnButton) {
      _export('GridColumnButton', _gridColumnsGridColumnButton.GridColumnButton);
    }, function (_gridColumnsGridColumnCheckbox) {
      _export('GridColumnCheckbox', _gridColumnsGridColumnCheckbox.GridColumnCheckbox);
    }, function (_gridColumnsGridColumnEdit) {
      _export('GridColumnEdit', _gridColumnsGridColumnEdit.GridColumnEdit);
    }, function (_gridColumnsGridColumnTemplate) {
      _export('GridColumnTemplate', _gridColumnsGridColumnTemplate.GridColumnTemplate);
    }],
    execute: function () {}
  };
});