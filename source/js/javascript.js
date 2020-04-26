const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');

burger.addEventListener("click", function () {
    burger.classList.toggle('active');
    navigation.classList.toggle('active');
});

// This version works, for each row__link only corresponding row_svg is used.
// Эта версия работает, для каждого row__link используется только соответствующий ему row_svg
const rowLink = document.querySelectorAll('.row__link');

rowLink.forEach(function (element) {
	var rowItem = element.parentNode;
	var rowSvg = rowItem.querySelector('.row__svg');
    element.addEventListener("mouseover", function () {
        rowSvg.classList.add("induced");
    });
    element.addEventListener("mouseout", function () {
		rowSvg.classList.remove("induced");
    });
})  



/* Эта версия не работает.
const rowLink = document.querySelectorAll('.row__link');
const rowSvg = document.querySelector('.row__svg');
rowLink.forEach(function (element) {
    element.addEventListener("mouseover", function () {
        rowSvg.classList.add("induced"); 
        console.dir(rowSvg);
    });
    element.addEventListener("mouseout", function () {
        rowSvg.classList.remove("induced"); 
        console.dir(rowSvg);
    });
}) 
*/