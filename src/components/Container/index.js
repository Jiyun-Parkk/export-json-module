import { InputContainer } from '../index.js'

export class Container {
  constructor($root, nation, labelList, contentsList) {
    this.$container = document.createElement('div')
    this.$container.className = 'input-wrapper'

    for (let i = 1; i <= contentsList.length; i++) {
      const list = contentsList[i - 1]
      console.log(list)
      this.$inputContainerLabel = document.createElement('h3')
      this.$inputContainerLabel.innerText = list
      this.$inputContainerLabel.className = 'container-label'
      this.$container.append(this.$inputContainerLabel)

      const inputContainer = new InputContainer({
        $root: this.$container,
        pageNum: list,
        inputName: nation,
        contents: list,
        labelList: labelList,
        index: i - 1,
      })
    }

    $root.append(this.$container)
  }
}
