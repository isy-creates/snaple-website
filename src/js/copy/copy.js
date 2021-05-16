class Copy {
  constructor() {
    this.button = document.querySelectorAll(".copy-code");

    this.event();
  }

  event() {
    this.button.forEach(el =>
      el.addEventListener("click", e => this.copyCode(e))
    );
  }

  copyCode(e) {
    e.preventDefault();
    var target = e.target.closest(".uagb-tabs__body");
    var code = target.querySelector(".wp-block-code code");
    var range = document.createRange();

    range.selectNode(code);
    window.getSelection().removeAllRanges(); //clear current selection
    window.getSelection().addRange(range); //select the text
    document.execCommand("copy"); // copy to clipboard
    window.getSelection().removeAllRanges(); // deselect everything
  }
}

export default Copy;
