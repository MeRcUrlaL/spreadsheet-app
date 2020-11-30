import SpreadsheetComponent from '@core/SpreadsheetComponent';
import createTable from '@/components/table/table.template';

export default class Table extends SpreadsheetComponent {
  static className = 'spreadsheet__table'

  toHTML() {
    return createTable(20)
  }
}
