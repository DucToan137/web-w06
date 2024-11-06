$(document).ready(function () {
    $.get(`/api/products/get`, function (productsRes) {
        const products=productsRes.data;
        const productCards = generateProductCards(products);
        // $('#products-grid').html(productCards);
    });
});

export {generateRatingStars};



// const generatePriceDisplay = (product) => {
//     var priceDisplay = '';
//     if(product.salePrice !==null && product.salePrice>0){
//         priceDisplay= `
//         <p class="text-sm text-primary font-semibold">$${product.salePrice}</p>
//         <p class="text-sm text-gray-400 line-through">$${product.price}</p>
//         `;
//     }
//     else{
//         priceDisplay=`
//         <p class="text-sm text-gray-400">$${product.price}</p>
//         `;
//     }
//     return priceDisplay;
// };


// const generateProductCard = (product) => {
//     const productCard = `
//     <div class="bg-white shadow rounded overflow-hidden group">
//         <div class="relative">
//             <img src="${product.image}" alt="product 1" class="w-full cursor-pointer">
//         </div>
//         <div class="pt-4 pb-3 px-4">
//             <a href="#">
//                 <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
//                 ${product.name}
//                 </h4>
//             </a>
//             <div class="flex items-baseline mb-1 space-x-2">
//                 ${generatePriceDisplay(product)}
//             </div>
//             <div class="flex items-center">
//                 <div class="flex gap-1 text-sm text-yellow-400">
//                 ${generateRatingStars(Math.floor(product.rating))}
//                 </div>
//                 <div class="text-xs text-gray-500 ml-3">(150)</div>
//             </div>
//         </div>
//         <a href="#"
//             class="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add
//             to cart</a>
//     </div>
//     `;
//     return productCard;
// };


// const generateProductCards = (products) => {
//     const productCards = products.map((product) => generateProductCard(product));
//     return productCards.join('');
// };