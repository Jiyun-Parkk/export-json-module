export class Title {
  constructor($root, titleText) {
    this.$title = document.createElement('h3')
    this.$title.className = 'title'
    this.$title.textContent = titleText

    $root.append(this.$title)
  }
}
