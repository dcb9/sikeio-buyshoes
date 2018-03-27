import PerfectScrollbar from 'perfect-scrollbar';

import "../node_modules/perfect-scrollbar/css/perfect-scrollbar.css";

window.onload = function() {
  makeCartScrollNicely();

  let $toggle = document.querySelector(".site__right-sidebar-toggle");
  $toggle.addEventListener("click", function () {
    document.body.classList.toggle("js-show-right-sidebar");
  });
  console.log("page loaded");
}

function makeCartScrollNicely() {
  const ps = new PerfectScrollbar('.cart__items')
}
