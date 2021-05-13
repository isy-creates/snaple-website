class Resize {
  constructor() {
    this.resize = document.querySelector(".pattern__resizeable");
    this.preview = document.querySelector(".preview");

    this.initObserver();
  }

  initObserver() {
    let ro = new ResizeObserver(entries => {
      for (let entry of entries) {
        let width = entry.contentRect.width;

        if (width >= 500) {
          this.preview.classList.add("large");
        } else {
          this.preview.classList.remove("large");
        }
      }
    });

    ro.observe(this.resize);
  }
}

export default Resize;
