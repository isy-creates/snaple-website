class CheckOverflow {
  constructor() {
    this.parent = document.querySelector("header");
    this.nav = document.querySelector(".menu");

    this.events();
  }

  events() {
    const parentWidth = this.parent.getBoundingClientRect().width;
    const navWidth = this.nav.getBoundingClientRect().width;

    console.log("parent:" + parentWidth + ", nav:" + navWidth);

    if (parentWidth < navWidth) {
      console.log("kleiner!");
    }
  }
}

export default CheckOverflow;
