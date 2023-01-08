export class InputBox {
  constructor({ $root, tag, content, inputName = '', value = '' }) {
    this.$inputBox = document.createElement('div')
    this.$inputBox.className = 'input-group mb-1'
    this.$input = document.createElement(tag)
    this.$input.name = inputName
    this.$input.value = value
    this.$input.dataset.title = content
    this.$input.className = 'form-control'
    this.$inputLabel = document.createElement('span')
    this.$inputLabel.className = 'input-group-text'
    this.$inputLabel.id = 'inputGroup-sizing-default'
    this.$inputLabel.textContent = `${content}`

    this.$inputBox.append(this.$inputLabel, this.$input)

    $root.append(this.$inputBox)
  }
}

export class InputContainer {
  constructor({ $root, pageNum, inputName, contents, labelList, index }) {
    this.$inputContainer = document.createElement('div')
    this.$inputContainer.className = 'input-container'
    const storage = JSON.parse(localStorage.getItem('titlelist'))

    for (const [idx, content] of labelList.entries()) {
      const input = new InputBox({
        $root: this.$inputContainer,
        content: content,
        tag: 'textarea',
        inputName: inputName,
      })
    }

    $root.append(this.$inputContainer)
  }
}
