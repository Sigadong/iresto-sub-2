class LikeMenu extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `    
    <div class="liked">
    <h2><i class="fa fa-heart-o fa-lg" aria-hidden="true"></i> Favorite Restaurant</h2>
    <div class="search-favorite">
      <input id="query" type="search" autocomplete="off" placeholder="Search..">
      <button id="searchButton" type="submit">Search</button>
    </div>
    <div class="container-cards" id="card-restaurants"></div>
    </div>
    `;
  }
}

customElements.define('like-menu', LikeMenu);
