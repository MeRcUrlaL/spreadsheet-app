import SpreadsheetComponent from '@core/SpreadsheetComponent';

export default class Header extends SpreadsheetComponent {
  static className = 'spreadsheet__header'

  toHTML() {
    return `
      <input type="text" class="input" value="Новая таблица">
      <div>
        <div class="button">
          <span class="material-icons">delete</span>
        </div>
        <div class="button">
          <span class="material-icons">exit_to_app</span>
        </div>
      </div>
    `
  }
}
