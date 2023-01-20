class GotoContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <a href="#main-content" class="skip-link" aria-label="goto_content">Go to content</a>
    `;
  }
}

customElements.define('goto-content', GotoContent);
