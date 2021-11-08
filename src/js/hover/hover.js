class Hover {
  constructor() {
    this.element = document.querySelectorAll(".js-hover .boxes__content");
    this.text = "js-inactive";
    this.opacity = 0;
    this.events();
  }

  events() {
    this.element.forEach((el) => {
      el.addEventListener("mouseenter", (e) => {
        this.element.forEach((li) => {
          li.classList.remove(this.text);

          if (li !== e.target) {
            li.classList.toggle(this.text);
          }
        });
      });

      el.addEventListener("mouseleave", (e) => {
        this.element.forEach((li) => {
          li.classList.remove(this.text);
        });
      });
    });
  }
}

export default Hover;
