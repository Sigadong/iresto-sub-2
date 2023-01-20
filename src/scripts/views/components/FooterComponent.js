import './GotocontentComponent';
import './NavbarComponent';
import './JumbotronComponent';

class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const date = new Date();

    this.innerHTML = `
      <p>&copy; 2020 - ${date.getFullYear()} <span class="i-logo">iResto</span>. All Rights Reserved.</p>
    `;
  }
}

customElements.define('footer-copyright', Footer);
