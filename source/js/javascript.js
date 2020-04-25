const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');

burger.addEventListener("click", function () {
    burger.classList.toggle('active');
    navigation.classList.toggle('active');
});

const rowLink = document.querySelectorAll('.row__link');
const rowSvg = document.querySelectorAll('.row__svg');
rowLink.forEach(function (item) {
    item.addEventListener("mouseover", function () {
        rowSvg.forEach(function (item) {
            item.classList.toggle('induced');
            console.dir(rowSvg);
        });
    });
});