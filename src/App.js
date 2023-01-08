import { ClearButton, Form, TabMenu } from './components/index.js'

export default class App {
  constructor($root) {
    this.nationList = ['kr', 'cn', 'tcn', 'en', 'vn', 'jp']
    this.contentsList = [
      [
        ['KEYWORD', 'sub1'],
        ['INTERVIEW', 'sub2'],
        ['TRAVEL', 'sub3'],
        ['FASHION & BEAUTY', 'sub4'],
        ['EVENT', 'sub5'],
        ['SPECIAL ISSUE', 'sub6'],
      ],
      [
        ['KEYWORD', 'sub1'],
        ['INTERVIEW', 'sub2'],
        ['K-CLASS', 'sub6'],
        ['TRAVEL', 'sub3'],
        ['FASHION & BEAUTY', 'sub4'],
        ['EVENT', 'sub5'],
        ['SPECIAL ISSUE', 'sub7'],
      ],
    ]
    this.labelList = [
      'subNum',
      'label',
      'menuTit',
      'mainTit',
      'magazine',
      'subtxt',
    ]

    //add clearBtn
    const $clearBtn = new ClearButton($root)

    //add tabmenu
    const $tabMenu = new TabMenu($root, this.nationList)

    //add form
    const $form = new Form(
      $root,
      this.nationList,
      this.contentsList,
      this.labelList
    )

    const containerList = document.querySelectorAll('.container-box')
    const tabList = document.querySelectorAll('li')
    tabList[0].classList.add('active')
    containerList[0].style.display = 'block'
    history.scrollRestoration = 'manual'
  }
}
