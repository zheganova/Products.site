document.addEventListener('DOMContentLoaded', function() {
    const tabsItems = document.querySelectorAll('.product-tabs__item');

    tabsItems[0].addEventListener('click', function() {
        window.location.href = 'index.html';
    });

    tabsItems[1].addEventListener('click', function() {
        window.location.href = 'reviews.html';
    });

    tabsItems[2].addEventListener('click', function() {
        window.location.href = 'where-from.html';
    });
});