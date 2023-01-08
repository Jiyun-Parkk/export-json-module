import { ClearButton, Form, TabMenu } from './components/index.js'

export default class App {
  constructor($root) {
    this.nationList = ['menu1', 'menu2', 'menu3']
    this.contentsList = ['sample1', 'sample2', 'sample3']
    this.labelList = ['key1', 'key2', 'key3']

    //add clearBtn
    const $clearBtn = new ClearButton($root)

    //add tabmenu
    const $tabMenu = new TabMenu($root, this.nationList)

    //add form
    const $form = new Form(
      $root,
      this.nationList,
      this.contentsList,
      this.labelList,
    )

    const containerList = document.querySelectorAll('.container-box')
    const tabList = document.querySelectorAll('li')
    tabList[0].classList.add('active')
    containerList[0].style.display = 'block'
    history.scrollRestoration = 'manual'
  }
}
