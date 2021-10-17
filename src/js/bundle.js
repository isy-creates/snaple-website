// bundle.js

import Swiper from "swiper";
// core version + navigation, pagination modules:
import SwiperCore, { Pagination } from "swiper/core";
//import Drag from "./drag/drag.js";
import Resize from "./resize/resize.js";
import Copy from "./copy/copy.js";
import Hover from "./hover/hover";

// configure Swiper to use modules
SwiperCore.use([Pagination]);

const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  allowTouchMove: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1340: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },
  threshold: 3,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

new Resize();
new Copy();
new Hover();
