class AppBar extends HTMLElement {
  connectedCallback() {
    this.content = this.getAttribute('content') || null
    this.render()
  }

  render() {
    this.innerHTML = `<h2>${this.content}</h2>`
  }
}

customElements.define('app-bar', AppBar)
