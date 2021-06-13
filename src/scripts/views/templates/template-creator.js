import CONFIG from '../../globals/config';

const createListItemTemplate = (listItem) => `
    <article class="cards">
     <p class="city">${listItem.city}</p>
     <img class="thumbnail" crossorigin="anonymous" src="${listItem.pictureId ? CONFIG.BASE_IMAGE_URL + listItem.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="${listItem.name}">
     <div class="item">
             <p class="rating">⭐️ <span>${listItem.rating}</span></p>
             <h3><a href="${`/#/detail/${listItem.id}`}" aria-label="link to detail">${listItem.name}</a></h3>
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
                <h4 class="star-detail">⭐️${detailMenu.rating}</h4>
                <h4 class="title-detail">${detailMenu.name}</h4>
                <h4><i class="fa fa-map-marker fa-lg" aria-hidden="true"></i> ${detailMenu.city}, ${detailMenu.address}</h4>
                <h4>🗸Foods</h4>
                <ul class="ul-list">
                    ${detailMenu.menus.foods.map((food) => ` ⸰${food.name}`)}
                </ul>
                <h4>🗸Drinks</h4>
                <ul class="ul-list">
                    ${detailMenu.menus.drinks.map((drink) => ` ⸰${drink.name}`)}
                </ul>
            </div >
        </div >
        
        <div class="reviews">
         <h2 class="title-review"><i class="fa fa-wpforms fa-lg" aria-hidden="true"></i> Form Review</h2> 
          <div class="row-review">
            <div class="column-label">
             <label for="name-customer">Your Name</label>
            </div>
            <div class="column-input">
             <input type="text" id="name-customer" placeholder="Your name.." autocomplete="off">
            </div>
          </div>
          <div class="row-review">
            <div class="column-label">
             <label for="review-customer">Your Review</label>
            </div>
            <div class="column-input">
             <textarea id="review-customer" placeholder="Write something.." style="height: 120px"></textarea>
            </div>
          </div>
          <div class="row-review submit">
            <button id="buttonAdd" aria-label="added review">Add <i class="fa fa-plus" aria-hidden="true"></i></button>
          </div>         
    </div>
    `;

const createCustomerReviewsTemplate = (detailReview) =>
    `<div class="reviews">
     <h2 class="title-review"><i class="fa fa-users fa-lg" aria-hidden="true"></i> Consumer Reviews</h2>
     ${detailReview.customerReviews.map((review) =>
        `<div class="row-review review-customer">
          <div class="column-label customer">
            <label for="firstname"><h4><i class="fa fa-user fa-lg" aria-hidden="true"></i> ${review.name}</h4></label>
          </div>
          <div class="column-input customer">
             <p>${review.review}</p>
             <p class="date-review">${review.date}</p>
          </div>
        </div>
        `
    ).join('')}
    </div>`;

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
        <h3 class="text-alert text-heads"><span>Oww!</span> Empty your favorite. Please <a href="#/list-menu" aria-label="link navigasi">clik here..</a></h3>
    </div>
    `;

const createIndicatorLoadingTemplate = () => `
    <div class="alert indicators">
        <img class="spinner" src="images/gif/spinner.gif" alt="spinner">
    </div>
    `;

const createCanNotAccessedTemplate = () => `
    <div class="alert danger">
        <h3 class="text-alert text-danger"><span class="circled-x">⮾</span> The connection is not connected, you cannot access the page.</h3>
    </div>
    `;

export {
    createListItemTemplate,
    createMenuDetailTemplate,
    createLikeButtonTemplate,
    createLikedButtonTemplate,
    createEmptyFavoriteTemplate,
    createIndicatorLoadingTemplate,
    createCanNotAccessedTemplate,
    createCustomerReviewsTemplate,
};