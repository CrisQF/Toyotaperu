document.addEventListener('DOMContentLoaded', async function () {
    let productContainer = document.getElementById('product-container');
    let url = 'https://api.escuelajs.co/api/v1/products?offset=10&limit=4';

    try {
        let data = await fetch(url);
        let response = await data.json();

        for (let i = 0; i < response.length; i++) {
            let productCard = document.createElement('div');
            productCard.className = 'product-card';

            productCard.innerHTML = `
                <img src="${response[i].images[0]}" alt="" class="product-img">
                <h2 class="product-title">${response[i].title}</h2>
                <h4 class="product-category">${response[i].category.name}</h4>
                <p class="product-description">${response[i].description}</p>
                <div class="product-price-container">
                    <h3 class="product-price">${response[i].price}</h3>
                    <a href="#!" data-productId="${response[i].id}" class="add-to-cart"></a>
                </div>
            `;

            productContainer.appendChild(productCard);
        }
    } catch (error) {
        console.error('Error fetching products:', error);
    }
});

