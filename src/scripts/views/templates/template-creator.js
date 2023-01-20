import CONFIG from '../../globals/config';

const createListItemTemplate = (listItem) => `
    <article class="cards">
      <div class="card-item">
        <div class="card-header">
          <p class="city">${listItem.city}</p>
          <p class="rating">${listItem.rating}<span>⭐️</span></p>
        </div>
        <div class="image--thumbnail">
          <img class="lazyload thumbnail" width="360" height="270" crossorigin="anonymous" data-src="${listItem.pictureId ? CONFIG.BASE_IMAGE_URL + listItem.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="${listItem.name}">
        </div>
        <div class="item">
          <h3 class="menu-title"><a href="${`/#/detail/${listItem.id}`}" aria-label="link to detail">${listItem.name || '-'}</a></h3>
          <p class="description">${listItem.description}</p>
        </div>
      </div>
     </article>
  `;

const createSkeletonListItemTemplate = (count) => {
  let templateSkeleton = '';

  for (let i = 0; i < count; i += 1) {
    templateSkeleton += `
        <article class="cards">
          <div class="card-item">
          <picture class="image--thumbnail">
              <source class="thumbnail" type="image/webp" srcset="./images/placeholder.webp">
              <source class="thumbnail" type="image/png" srcset="./images/placeholder.png">
              <img class="thumbnail" src="./images/placeholder.png" alt="">
          </picture>
          <div class="item">
              <p class="skeleton"><span>Dolor sit.</span> Adipisicing</p>
              <h3 class="skeleton">Lorem ipsum dolor sit.</h3>
              <p class="skeleton">Lorem ipsum dolor sit amet, consectetur adipisicing elit adipisicing.</p>
          </div>
          <div class="card-item">
        </article>
        `;
  }
  return templateSkeleton;
};

const createMenuDetailTemplate = (detailMenu) => `
        <div class="detail-card">
          <div class="detail-image">
            <img class="lazyload image" crossorigin="anonymous" data-src="${CONFIG.BASE_IMAGE_URL + detailMenu.pictureId}" alt="${detailMenu.name}">
          </div>
          <div class="detail-text">
            <h3 class="title-detail menu-title">${detailMenu.name || '-'}</h3>
            <h3 class="star-detail">⭐️${detailMenu.rating}</h3>
            <h3><i class="fa fa-map-marker fa-lg" aria-hidden="true"></i> ${detailMenu.city}, ${detailMenu.address}</h3>
            <h3 class="title-item__detail">Categories</h3>
            <ul class="ul-list">
               ${detailMenu.categories.map((category) => `<li>⸰ ${category.name}</li>`).join('')}
            </ul>
            <h3 class="title-item__detail">Menus</h3>
            <h3><span style="color: red; font-weight: 700">🗸</span> Foods</h3>
            <ul class="ul-list">
              ${detailMenu.menus.foods.map((food) => `<li>⸰ ${food.name}</li>`).join('')}
            </ul>
            <h3><span style="color: red; font-weight: 700">🗸</span> Drinks</h3>
            <ul class="ul-list">
               ${detailMenu.menus.drinks.map((drink) => `<li>⸰ ${drink.name}</li>`).join('')}
            </ul>
            <h3 class="title-item__detail">Description</h3>
              <p class="desciption">${detailMenu.description}</p>
            </div>
        </div >
        
        <div class="reviews">
         <h2 class="title-review"><i class="fa fa-wpforms fa-lg" aria-hidden="true"></i> Form Review</h2> 
          <div class="row-review">
            <div class="column-label">
             <label for="name-customer">Your Name</label>
            </div>
            <div class="column-input">
             <input type="text" id="name-customer" placeholder="Your name.." autocomplete="off" required>
            </div>
          </div>
          <div class="row-review">
            <div class="column-label">
             <label for="review-customer">Your Review</label>
            </div>
            <div class="column-input">
             <textarea id="review-customer" placeholder="Write something.." style="height: 120px" required></textarea>
            </div>
          </div>
          <div class="row-review submit">
            <button id="buttonAdd" aria-label="added review">Add <i class="fa fa-plus" aria-hidden="true"></i></button>
          </div>         
        </div>
    `;

const createCustomerReviewsTemplate = (detailReview) => (
  `<div class="reviews">
     <h2 class="title-review"><i class="fa fa-users fa-lg" aria-hidden="true"></i> Consumer Reviews</h2>
     ${detailReview.customerReviews.map((review) => `
        <div class="row-review review-customer">
          <div class="column-label customer">
            <label for="firstname"><h4><i class="fa fa-user fa-lg" aria-hidden="true"></i> ${review.name}</h4></label>
          </div>
          <div class="column-input customer">
             <p>${review.review}</p>
             <p class="date-review">${review.date}</p>
          </div>
        </div>
      `).join('')}
  </div>`
);

const createLikeMenuButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like" >
        <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
    `;

const createUnlikeMenuButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like" >
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
    `;

const createFavoriteMenuNotAvailableTemplate = () => `
    <div class="alert favorite">
      <h3 class="text-alert text-heads" id="text-heads">
        <span>❎</span> Upsss.. Favorite restaurant is not available. Please <a href="#/restaurants" aria-label="link navigasi">clik here.
      </h3>
    </div>
    `;

const createIndicatorLoadingTemplate = () => `
    <div class="alert indicators">        
        <video autoplay loop muted playsinline class="spinner">
          <source src="./images/gif/spinner.webm" type="video/webm">
          <source src="./images/gif/spinner.mp4" type="video/mp4">
        </video>
    </div>
    `;

const createCanNotAccessedTemplate = () => `
    <div class="alert danger">
      <h3 class="text-alert text-danger">
        <span>❌</span> The connection is not connected, you cannot access the page.
      </h3>
    </div>
    `;

export {
  createListItemTemplate,
  createSkeletonListItemTemplate,
  createMenuDetailTemplate,
  createLikeMenuButtonTemplate,
  createUnlikeMenuButtonTemplate,
  createIndicatorLoadingTemplate,
  createCanNotAccessedTemplate,
  createCustomerReviewsTemplate,
  createFavoriteMenuNotAvailableTemplate,
};
