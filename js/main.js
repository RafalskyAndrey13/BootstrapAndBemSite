var filterButtons = document.querySelectorAll('.filter-buttons button');
var images = document.querySelectorAll('.filter>div');
var activeButton = filterButtons[0];

var filterResults = function (filterButton) {
    var filter = filterButton.dataset.filter;
    console.log(filter);
    for (var i = 0; i < images.length; i++) {
        console.log(images[i].dataset.filter);
        if (filter !== 'all' && images[i].dataset.filter !== filter) {
            console.log('true');
            // images[i].style.display = 'none';
            images[i].style.transform = 'scale(0)';

        } else {
            // images[i].style.display = 'block';
            images[i].style.transform = 'scale(1)';
        }
    }
};

var addClickListeners = function (filterButton) {
    filterButton.addEventListener('click', function () {
        filterButton.classList.add('active');
        activeButton.classList.remove('active');
        activeButton = filterButton;
        filterResults(filterButton);
    });
};

for (var i = 0; i < filterButtons.length; i++) {
    addClickListeners(filterButtons[i]);
}