class Copy {
  constructor() {
    this.button = document.querySelectorAll(".copy-code");
    this.size = this.checkScreenSize();

    this.events();
    this.init();
  }

  events() {
    window.addEventListener("resize", e => this.init(e));
    this.button.forEach(el => el.addEventListener("click", e => this.init(e)));
  }

  init(e) {
    this.size = this.checkScreenSize();

    if (this.size === "mobile") {
      this.changeButtonText("mobile");
      this.changeLinkText();
    }

    if (this.size === "desktop") {
      this.changeButtonText("desktop");
      this.copyCode(e);
    }
  }

  changeLinkText() {
    this.button.forEach(el =>
      el.firstChild.setAttribute(
        "href",
        "mailto:?subject=I wanted you to see this site&amp;body=Check out this site http://www.website.com."
      )
    );
  }

  checkScreenSize() {
    if (window.screen.width >= 1548) {
      return "desktop";
    } else {
      return "mobile";
    }
  }

  changeButtonText(size) {
    let text;

    if (size === "mobile") {
      text = "Send Website Link via email";
    } else {
      text = "Copy Code to clipboard";
    }

    this.button.forEach(el => {
      el.firstChild.innerHTML = text;
    });
  }

  copyCode(e) {
    e.preventDefault();
    let target = e.target.closest(".uagb-tabs__body");
    let code = target.querySelector(".wp-block-code code");
    let range = document.createRange();

    range.selectNode(code);
    window.getSelection().removeAllRanges(); //clear current selection
    window.getSelection().addRange(range); //select the text
    document.execCommand("copy"); // copy to clipboard
    window.getSelection().removeAllRanges(); // deselect everything
    this.successMessage(e);
  }

  successMessage(e) {
    let message = document.createElement("p");
    message.classList.add("messages");
    let node = document.createTextNode("Code copied");
    message.appendChild(node);

    let button = e.target.parentNode;
    button.appendChild(message);

    let removeButton = setTimeout(() => {
      button.removeChild(message);
    }, 1000);
  }
}

export default Copy;
