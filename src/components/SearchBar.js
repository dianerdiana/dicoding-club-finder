class SearchBar extends HTMLElement {
  connectedCallback() {
    this.placeholder = this.getAttribute('placeholder') || null
    this.btnName = this.getAttribute('btnName') || null
    this.render()
  }

  set clickEvent(event) {
    this._clickEvent = event
    this.render()
  }

  get value() {
    return this.querySelector('#searchElement').value
  }

  render() {
    this.innerHTML = `
      <div id="search-container" class="search-container">
        <input
          placeholder="${this.placeholder}"
          id="searchElement"
          type="search"
        />
        <button id="searchButtonElement" type="submit">${this.btnName}</button>
      </div>
    `
    this.querySelector('#searchButtonElement').addEventListener(
      'click',
      this._clickEvent
    )
  }
}

customElements.define('search-bar', SearchBar)
