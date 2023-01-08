export class ClearButton {
  constructor($root) {
    this.$buttonBox = document.createElement('div')
    this.$buttonBox.className = 'clearbtn-box'
    this.$clearBtn = document.createElement('button')
    this.$clearBtn.className = 'btn btn-success'
    this.$clearBtn.textContent = 'Clear Storage'

    this.$buttonBox.append(this.$clearBtn)
    $root.append(this.$buttonBox)

    this.$clearBtn.addEventListener('click', () => {
      if (localStorage.getItem('titlelist')) {
        const check = confirm('Are you sure clear storage?')
        if (check) {
          alert('clear!')
          localStorage.clear()
          location.reload()
        }
      } else {
        alert('There is no storage data!')
      }
    })
  }
}
