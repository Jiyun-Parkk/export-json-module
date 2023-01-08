export class TabMenu {
  constructor($root, nationList) {
    this.$tabBox = document.createElement('ul')
    this.$tabBox.className = 'tab-box'

    for (let nation of nationList) {
      this.$tabMenu = document.createElement('li')
      this.$tabMenu.dataset.nation = nation
      this.$tabMenu.textContent = nation.toUpperCase()
      this.$tabMenu.className = 'btn btn-warning'
      this.$tabBox.append(this.$tabMenu)
    }
    this.$tabBox.addEventListener('click', (e) => this.handleClickMenu(e))

    $root.append(this.$tabBox)
  }
  handleClickMenu(e) {
    const containerList = document.querySelectorAll('.container-box')
    const tabList = document.querySelectorAll('li')

    if (e.target.tagName === 'LI') {
      tabList.forEach((list) => list.classList.remove('active'))
      e.target.classList.add('active')
      containerList.forEach((contain) => {
        if (e.target.dataset.nation === contain.dataset.nation) {
          contain.style.display = 'block'
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          })
        } else {
          contain.style.display = 'none'
        }
      })
    }
  }
}
