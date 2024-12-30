'use strict'
const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContents = document.querySelectorAll('.tabs__content-item');

tabItem.forEach(function (element) {
    element.addEventListener('click', open);
})
function open(evt) {
    const tabTarget = evt.currentTarget;
    const button = tabTarget.dataset.button;

    tabItem.forEach(function (item) {
        item.classList.remove('tabs__btn-item--active')
    })
    tabContents.forEach(function (item) {
        item.classList.remove('tabs__content-item--active')
    })
    tabTarget.classList.add('tabs__btn-item--active');
    document.querySelector(`#${button}`).classList.add('tabs__content-item--active')
}
(() => {
  const menuBtnRef = document.getElementById("menu-btn");
  const mobileMenuRef = document.getElementById("mobile-menu");
  const mobileNav = document.querySelector('.mobile__nav');
  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
    mobileNav.classList.toggle("is-open");
  });
})();

/*Button Up*/ 
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.onscroll = function() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    scrollTopBtn.classList.remove("hidden");
  } else {
    scrollTopBtn.classList.add("hidden");
  }
};

scrollTopBtn.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"  
  });
};