import SpreadsheetComponent from '@core/SpreadsheetComponent';

export default class Formula extends SpreadsheetComponent {
  static className = 'spreadsheet__formula'

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click'],
    });
  }

  toHTML() {
    return `
      <div class="info">fx</div>
      <div class="input" contenteditable="true" spellcheck="false"></div>
    `
  }

  onInput(event) {
    // eslint-disable-next-line no-restricted-globals,no-console
    console.log('Formula onInput', event.target.textContent.trim())
  }

  onClick() {
    // console.log('lc')
  }
}
