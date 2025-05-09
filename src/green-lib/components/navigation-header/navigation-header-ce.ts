import { type HTMLAttributes } from 'react'

interface CarouselLayoutAttributes {}

declare module 'react/jsx-runtime' {
  namespace JSX {
    interface IntrinsicElements {
      'navigation-header': HTMLAttributes<NavigationHeader> & CarouselLayoutAttributes
    }
  }
}

class NavigationHeader extends HTMLElement {
  modalBackground?: HTMLDivElement | null
  modalPop?: HTMLDivElement | null
  closeButton?: HTMLDivElement | null
  openButton?: HTMLDivElement | null

  hideMenu = () => {
    this.modalBackground!.style.visibility = 'hidden'
    this.modalPop!.style.visibility = 'hidden'
    this.modalPop!.style.transform = 'scale(0.8)'
    this.closeButton!.style.display = 'none'
  }
  showMenu = () => {
    this.modalBackground!.style.visibility = 'visible'
    this.modalPop!.style.visibility = 'visible'
    this.modalPop!.style.transform = 'scale(1)'
    this.closeButton!.style.display = 'block'
  }

  async connectedCallback() {
    const sr = this.shadowRoot

    this.openButton = sr!.querySelector('.navigation-header .open-menu-button')
    this.closeButton = sr!.querySelector('.modal-menu .modal-close-button')
    this.modalBackground = sr!.querySelector('.modal-menu .modal-background')
    this.modalPop = sr!.querySelector('.modal-menu .modal-popup')
    this.openButton!.onclick = () => {
      this.showMenu()
    }
    this.modalBackground!.onclick = () => {
      this.hideMenu()
    }
    this.closeButton!.onclick = () => {
      this.hideMenu()
    }
  }
}
if (!customElements.get('navigation-header')) {
  customElements.define('navigation-header', NavigationHeader)
}
