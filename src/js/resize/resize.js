class Resize {
  constructor() {
    this.resize = document.querySelector(".pattern__resizeable");
    this.preview = document.querySelector(
      ".pattern__resizeable div:first-child"
    );

    this.initObserver();
  }

  initObserver() {
    let ro = new ResizeObserver(entries => {
      for (let entry of entries) {
        let width = entry.contentRect.width;

        if (width >= 500) {
          this.add();
        } else {
          this.remove();
        }
      }
    });

    if (this.resize) {
      ro.observe(this.resize);
    }
  }

  remove() {
    this.preview.classList.remove("large");
  }

  add() {
    this.preview.classList.add("large");
  }
}

export default Resize;

//was bedeutet das false?
