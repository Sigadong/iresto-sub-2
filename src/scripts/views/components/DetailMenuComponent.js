class DetailMenu extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <h2><i class="fa fa-list-alt fa-7x" aria-hidden="true"></i> Detail Menu</h2>
    <div class="detail-menu" id="detail-menu"></div>
    <div id="likeButtonContainer"></div>
    `;
  }
}

customElements.define('detail-menu', DetailMenu);
