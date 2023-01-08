export class SubmitButton {
  constructor($root) {
    this.$button = document.createElement('button')
    this.$button.setAttribute('type', 'submit')
    this.$button.className = 'btn btn-warning submit-btn'
    this.$button.textContent = 'Save as JSON file'
    $root.append(this.$button)
  }
}
