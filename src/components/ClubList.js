class ClubList extends HTMLElement {
  connectedCallback() {
    this.clubs = this.getAttribute('clubs')
  }

  render() {
    const clubList = this.cre
  }
}

customElements.define('club-list', ClubList)
