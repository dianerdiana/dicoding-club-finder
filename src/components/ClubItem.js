class ClubItem extends HTMLElement {
  connectedCallback() {
    this.club = this.getAttribute('club')
  }

  render() {
    const { name, fanArt, description } = this.club

    this.innerHTML = `
        <img class="fan-art-club" src=${fanArt} alt="Fan Art">
        <div class="club-info">
          <h2>${name}</h2>
          <p>${description}</p>
        </div>
      `
  }
}

customElements.define('club-item', ClubItem)
