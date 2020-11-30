import SpreadsheetComponent from '@core/SpreadsheetComponent';

export default class Toolbar extends SpreadsheetComponent {
  static className = 'spreadsheet__toolbar'

  constructor($root) { // options
    super($root, {
      name: 'Tollbar',
      listeners: [],
    })
  }

  toHTML() {
    return `
    <div class="button">
        <span class="material-icons">format_align_left</span>
      </div>
      <div class="button">
        <span class="material-icons">format_align_center</span>
      </div>
      <div class="button">
        <span class="material-icons">format_align_right</span>
      </div>
      <div class="button">
        <span class="material-icons">format_bold</span>
      </div>
      <div class="button">
        <span class="material-icons">format_italic</span>
      </div>
      <div class="button">
        <span class="material-icons">format_underline</span>
      </div>
    `
  }
}
