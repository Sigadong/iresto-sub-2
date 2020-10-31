import CONFIG from '../../globals/config';

const createListItemTemplate = (listItem) => `
    <article class="cards">
     <p class="city">${listItem.city}</p>
     <img class="thumbnail" crossorigin="anonymous" src="${listItem.pictureId ? CONFIG.BASE_IMAGE_URL + listItem.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="${listItem.name}">
     <div class="item">
             <p class="rating">⭐️ <span>${listItem.rating}</span></p>
             <h3><a href="${`/#/detail/${listItem.id}`}">${listItem.name}</a></h3>
             <p class="description">${listItem.description}</p>
         </div>
     </article>
  `;

const createMenuDetailTemplate = (detailMenu) => `
        <div class="detail-card">
            <div class="detail-image">
            <img class="image" crossorigin="anonymous" src="${CONFIG.BASE_IMAGE_URL + detailMenu.pictureId}" alt="${detailMenu.name}">
            </div>
            <div class="detail-text">
                <h4>⭐️${detailMenu.rating}</h4>
                <h4 class="star-detail">${detailMenu.name}</h4>
                <h4>${detailMenu.city}, ${detailMenu.address}</h4>
                <h4>🗸Foods</h4>
                <ul class="ul-list">
                    ${detailMenu.menus.foods.map((food) => `⸰${food.name}`,).join(' ')}
                </ul>
                <h4>🗸Drinks</h4>
                <ul class="ul-list">
                    ${detailMenu.menus.drinks.map((drink) => `⸰${drink.name}`,).join(' ')}
                </ul>
            </div >
        </div >
    `;

const createLikeButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like" >
        <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
    `;

const createLikedButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like" >
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
    `;

const createEmptyFavoriteTemplate = () => `
    <div class="alert favorite">
        <h3 class="text-alert text-heads"><span>Heads up!</span> Empty your favorite. Please <a href="#/list-menu" aria-label="link navigasi">clik here..</a></h3>
    </div>
    `;

const createPageNotFoundTemplate = () => `
    <div class="notfound">
        <h3>Page Not Found</h3>
    </div>
    `;

const createCanNotAccessedTemplate = () => `
    <div class="alert danger">
        <h3 class="text-alert text-danger"><span>Uppss..</span> Can't accessed page, please check your connection</h3>
    </div>
    `;

const createConsumerReviewsTemplate = (detailMenu) => `
    <div class="reviews" id="reviews">
     <h2 class="title-review"><i class="fa fa-wpforms fa-lg" aria-hidden="true"></i> Form Review</h2> 
        <div class="row">
         <div class="column-label">
          <label for="name-consumer">Your Name</label>
         </div>
         <div class="column-input">
          <input type="text" id="name-consumer" placeholder="Your name.." autocomplete="off">
         </div>
        </div>
        <div class="row">
         <div class="column-label">
          <label for="review-consumer">Your Review</label>
         </div>
         <div class="column-input">
          <textarea id="review-consumer" placeholder="Write something.." style="height: 150px"></textarea>
         </div>
        </div>
        <div class="row submit">
          <button id="buttonAdd" aria-label="added review">Add <i class="fa fa-plus" aria-hidden="true"></i></button>
        </div>
        
      <h2 class="title-review"><i class="fa fa-users fa-lg" aria-hidden="true"></i> Consumer Reviews</h2> 
      ${detailMenu.customerReviews.map((name) =>
    `<div class="row">
        <div class="column-label">
            <label for="firstname"><i class="fa fa-user fa-lg" aria-hidden="true"></i> ${name.name}</label>
        </div>
        <div class="column-input">
            <p>${detailMenu.customerReviews.map((review) => review.review)}</p>
        </div>
      </div>
      <h2> </h2>`
)}
    </div>
 `;

export {
    createListItemTemplate,
    createMenuDetailTemplate,
    createLikeButtonTemplate,
    createLikedButtonTemplate,
    createEmptyFavoriteTemplate,
    createPageNotFoundTemplate,
    createCanNotAccessedTemplate,
    createConsumerReviewsTemplate,
};