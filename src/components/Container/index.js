import { InputContainer } from '../index.js'

export class Container {
  constructor($root, nation, labelList, contentsList) {
    this.$container = document.createElement('div')
    this.$container.className = 'input-wrapper'

    let getContentList = nation === 'kr' ? contentsList[0] : contentsList[1]

    for (let i = 1; i <= getContentList.length; i++) {
      const list = getContentList[i - 1]

      this.$inputContainerLabel = document.createElement('h3')
      this.$inputContainerLabel.textContent = `${list[1].toUpperCase()} - ${
        list[0]
      }`
      this.$inputContainerLabel.className = 'container-label'
      this.$container.append(this.$inputContainerLabel)

      const inputContainer = new InputContainer({
        $root: this.$container,
        pageNum: list[1],
        inputName: nation,
        contents: list[0],
        labelList: labelList,
        index: i - 1,
      })
    }

    $root.append(this.$container)
  }
}
