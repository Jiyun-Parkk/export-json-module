import { Container, SubmitButton, InputBox, Title } from '../index.js'

export class Form {
  constructor($root, nationList, contentsList, labelList) {
    this.$form = document.createElement('form')
    this.labelList = labelList
    this.nationList = nationList

    const fileNameInput = new InputBox({
      $root: this.$form,
      tag: 'input',
      content: '파일이름',
      inputName: 'fileName',
    })

    for (const nation of this.nationList) {
      this.containerBox = document.createElement('div')
      this.containerBox.dataset.nation = nation
      this.containerBox.className = 'container-box'

      const title = new Title(this.containerBox, nation.toUpperCase())

      const container = new Container(
        this.containerBox,
        nation,
        labelList,
        contentsList,
      )
      this.$form.append(this.containerBox)
    }
    const submitBtn = new SubmitButton(this.$form)
    $root.append(this.$form)

    const fileName = document.querySelector('input[name=fileName]')
    localStorage.getItem('fileName')
      ? (fileName.value = localStorage.getItem('fileName'))
      : ''

    this.$form.addEventListener('submit', (e) => {
      this.handleSubmit(e)
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData(this.$form)
    const enter = new RegExp('\n')
    let list
    for (const nation of this.nationList) {
      let chunkList = this.chunk(formData.getAll(nation)).map((cclist) => {
        for (let key in cclist) {
          cclist[key] = cclist[key].replace(/\n/gi, '<br/>')
        }
        return cclist
      })

      list = { ...list, [nation]: chunkList }
    }
    const fileName = formData.get('fileName')

    localStorage.setItem(
      'titlelist',
      JSON.stringify(list).replaceAll('<br/>', enter).replaceAll('/', ''),
    )
    localStorage.setItem('fileName', fileName)

    fetch('/pushlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        list: list,
        fileName: fileName,
      }),
    }).then((res) => {
      fileName ? alert(`Saved ${fileName}.json!`) : alert(`Saved file.json!`)
    })
  }

  chunk(data = []) {
    let arr = []

    for (let i = 0; i < data.length; i += this.labelList.length) {
      arr.push(data.slice(i, i + this.labelList.length))
    }

    arr = arr.map((list) => {
      list = list
        .map((con, idx) => {
          return {
            [this.labelList[idx]]: con,
          }
        })
        .reduce((a, b) => Object.assign({}, a, b), {})
      return list
    })

    return arr
  }
}
