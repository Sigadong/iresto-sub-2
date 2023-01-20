class Jumbotron extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="jumbotron">
      <picture class="">
        <source class="imagehero" type="image/webp" srcset="./images/heros/hero-image_3-small.webp 480w, ./images/heros/hero-image_3-large.webp 800w" sizes="(max-width: 600px) 480px, 100%">
        <source class="imagehero" type="image/jpeg" srcset="./images/heros/hero-image_3-small.jpg 480w, ./images/heros/hero-image_3-large.jpg 800w" sizes="(max-width: 600px) 480px, 100%">
        <img class="imagehero" src="./images/heros/hero-image_3.jpg" alt="restaurant">
      </picture>

      <div class="title banner">
        <h1>Enjoy our new menus and feel the pleasure only at our outlet</h1>
        <p>Various kinds of food start from taste, type, and delicacy. Here we present local and international
          flavors made from Indonesian tongues.</p>
        <a href="#restaurants" aria-label="view menu restaurants">Explore Restaurant ❯</a>
      </div>
    </div>
    `;
  }
}

customElements.define('jumbotron-element', Jumbotron);
