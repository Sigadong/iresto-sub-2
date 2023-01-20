class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav>
      <button id="hamburger" aria-label="hamburger menu">☰</button>
      <div class="logo">
        <a href="/">iResto</a>
      </div>
      <ul>
        <li><a href="#/restaurants" class="active" aria-label="link navigasi">Home</a></li>
        <li><a href="#/favorites" aria-label="link navigasi">Favorite</a></li>
        <li><a href="https://www.linkedin.com/in/irwanto-siregar/?locale=in_ID" rel="noopener" target="_blank"
            aria-label="link navigasi">About Us</a>
        </li>
      </ul>
    </nav>
    `;
  }
}

customElements.define('nav-bar', Navbar);
