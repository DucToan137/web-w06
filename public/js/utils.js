const generateRatingStars = (rating) => {
    let ratingStars = '';
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            ratingStars += '<i class="fa-solid fa-star"></i>';
        } else {
            ratingStars += '<i class="fa-regular fa-star"></i>';
        }
    }
    return ratingStars;
};


export { generateRatingStars };