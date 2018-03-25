import PerfectScrollbar from 'perfect-scrollbar';

import "../node_modules/perfect-scrollbar/css/perfect-scrollbar.css";
import "../css/app.css";

window.onload = function() {
  makeCartScrollNicely();
  console.log("page loaded");
}

function makeCartScrollNicely() {
  const ps = new PerfectScrollbar('.cart .content')
}
