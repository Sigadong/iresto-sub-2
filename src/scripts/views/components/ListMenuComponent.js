import { createSkeletonListItemTemplate } from '../templates/template-creator';

class ListMenu extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <h2 id="restaurants"><i class="fa fa-list-alt fa-lg" aria-hidden="true"></i> Restaurants</h2>
    <div class="container-cards" id="card-restaurants">
      ${createSkeletonListItemTemplate(15)}
    </div>
    `;
  }
}

customElements.define('list-menu', ListMenu);
