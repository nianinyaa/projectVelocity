//TABS
const tabsBtns = document.querySelectorAll(".tabs__nav button");
//console.log(tabsBtns);

const tabsItems = document.querySelectorAll(".tabs__item");
//console.log(tabsItems);

//Функция скрывает табы и убирает active у кнопки//

function hideTabs ( ) {
    tabsItems.forEach(item => item.classList.add("hide"));
    tabsBtns.forEach(item => item.classList.remove("active"));
}

//Функция показывает переданный номер таба и делает соответствующую кнопку активной//
function showTab(index) {
    tabsItems[index].classList.remove("hide");
    tabsBtns[index].classList.add("active");
}

hideTabs();
showTab(2);


tabsBtns.forEach((btn,index) => btn.addEventListener("click", () => {
    hideTabs();
    showTab(index);
}));


//ANCHORS
const anchors = document.querySelectorAll(".header__nav a");

anchors.forEach(anc => {
    anc.addEventListener("click", function(event) {
        event.preventDefault();

        const id = anc.getAttribute("href");

        const elem = document.querySelector(id);

        window.scroll({
            top: elem.offsetTop - 75, 
            behavior: 'smooth'
        });
    })
});