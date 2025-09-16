// main.js for TheMart
// Show loading component on header/footer during XHR or navigation
function showLoading(target) {
    document.getElementById(target).classList.remove('d-none');
}
function hideLoading(target) {
    document.getElementById(target).classList.add('d-none');
}
// Example usage: showLoading('header-loading'); hideLoading('header-loading');
// You can expand this to wrap XHR calls, navigation, etc.

document.addEventListener('DOMContentLoaded', function () {
    // Example: Simulate loading for header/footer
    showLoading('header-loading');
    setTimeout(() => hideLoading('header-loading'), 800);
    showLoading('footer-loading');
    setTimeout(() => hideLoading('footer-loading'), 1200);

    // Render best sellers from API
    fetch('/api/shop-items')
        .then(response => response.json())
        .then(data => {
            if (!data.items) return;
            const container = document.querySelector('#best-sellers .container .row');
            if (!container) return;
            container.innerHTML = '';
            data.items.forEach(item => {
                const col = document.createElement('div');
                col.className = 'col-lg-3 col-md-6';
                col.innerHTML = `
                        <div class="product-item">
                            <div class="product-image">
                                <img src="static/assets/img/product/${item.image}" alt="${item.name}" class="img-fluid" loading="lazy">
                                <div class="product-actions">
                                    <button class="action-btn wishlist-btn"><i class="bi bi-heart"></i></button>
                                    <button class="action-btn compare-btn"><i class="bi bi-arrow-left-right"></i></button>
                                    <button class="action-btn quickview-btn"><i class="bi bi-zoom-in"></i></button>
                                </div>
                                <button class="cart-btn">Add to Cart</button>
                            </div>
                            <div class="product-info">
                                <div class="product-category">Best Sellers</div>
                                <h4 class="product-name">${item.name}</h4>
                                <div class="product-rating">
                                    <div class="stars">
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star"></i>
                                    </div>
                                    <span class="rating-count">(N/A)</span>
                                </div>
                                <div class="product-price">$${item.price}</div>
                            </div>
                        </div>
                    `;
                container.appendChild(col);
            });
        });
});
