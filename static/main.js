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

document.addEventListener('DOMContentLoaded', function() {
    // Example: Simulate loading for header/footer
    showLoading('header-loading');
    setTimeout(() => hideLoading('header-loading'), 800);
    showLoading('footer-loading');
    setTimeout(() => hideLoading('footer-loading'), 1200);
});
