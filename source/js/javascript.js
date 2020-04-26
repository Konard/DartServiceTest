const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');

burger.addEventListener("click", function () {
    burger.classList.toggle('active');
    navigation.classList.toggle('active');
});

//Эта версия работает, но при наведении добавляет класс всем пунктам. 
const rowLink = document.querySelectorAll('.row__link');
const rowSvg = document.querySelectorAll('.row__svg');

rowLink.forEach(function (element) {
    element.addEventListener("mouseover", function () {
        for (let i = 0; i < rowSvg.length; i++) {
            rowSvg[i].classList.add("induced");
        }
    });
    element.addEventListener("mouseout", function () {
        for (let i = 0; i < rowSvg.length; i++) {
            rowSvg[i].classList.remove("induced");
        }
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