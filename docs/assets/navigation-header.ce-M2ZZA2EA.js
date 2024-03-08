if (!customElements.get('navigation-header')) {
  class NavigationHeader extends HTMLElement {

    hideMenu = () => {
      this.modalBackground.style.visibility = 'hidden'
      this.modalPop.style.visibility = 'hidden'
      this.modalPop.style.transform = 'scale(0.8)'
      this.closeButton.style.display = 'none'
    }
    showMenu = () => {
      this.modalBackground.style.visibility = 'visible'
      this.modalPop.style.visibility = 'visible'
      this.modalPop.style.transform = 'scale(1)'
      this.closeButton.style.display = 'block'
    }

    async connectedCallback() {
      const sr = this.shadowRoot

      this.openButton = sr.querySelector('.navigation-header .open-menu-button')
      this.closeButton = sr.querySelector('.modal-menu .modal-close-button')
      this.modalBackground = sr.querySelector('.modal-menu .modal-background')
      this.modalPop = sr.querySelector('.modal-menu .modal-popup')
      this.openButton.onclick = () => {
        this.showMenu()
      }
      this.modalBackground.onclick = () => {
        this.hideMenu()
      }
      this.closeButton.onclick = () => {
        this.hideMenu()
      }
    }
  }
  customElements.define('navigation-header', NavigationHeader)
}
