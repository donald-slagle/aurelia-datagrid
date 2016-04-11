
import configuration from './grid/configuration';
export {GridColum} from './grid/columns/grid-column';
export {GridColumnButton} from './grid/columns/grid-column-button';
export {GridColumnCheckbox} from './grid/columns/grid-column-checkbox';
export {GridColumnEdit} from './grid/columns/grid-column-edit';
export {GridColumnTemplate} from './grid/columns/grid-column-template';

export function configure(aurelia, config) {
  aurelia.globalResources(
    './grid/grid',
    './grid/columns/grid-column',
    './grid/columns/grid-column-button',
    './grid/columns/grid-column-checkbox',
    './grid/columns/grid-column-edit',
    './grid/columns/grid-column-template');

  if (typeof(config) === 'function') {
    config(configuration);
  }
}
