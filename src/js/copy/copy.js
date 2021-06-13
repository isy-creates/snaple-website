class Copy {
  constructor() {
    this.codeblock = document.querySelector(".wp-block-prismatic-blocks");
    this.tabsBody = document.querySelectorAll(".uagb-tabs__body");
    this.mobileButton = document.querySelectorAll(".copy__link-mobile");
    this.desktopButton = document.querySelectorAll(".copy__link-desktop");

    this.init();
    this.events();
  }

  events() {
    window.addEventListener("click", e => {
      if (e.target.classList.contains("copy__link-desktop")) {
        this.copyCode(e);
      }

      if (e.target.classList.contains("copy__link-mobile")) {
        this.copyURL(e);
      }
    });
  }

  init() {
    let mobileCheck = this.isMobileDevice();

    if (mobileCheck) {
      this.createButton("mobile");
    } else {
      this.createButton("desktop");
    }
  }

  createButton(version) {
    let buttonText = version === "mobile" ? "Copy Webseite Link" : "Copy Code";
    let button = `<a class="copy__link copy__link-${version}" href="#">${buttonText}</a>`;

    this.tabsBody.forEach(el => {
      el.insertAdjacentHTML("beforeend", button);
    });
  }

  isMobileDevice() {
    return (
      typeof window.orientation !== "undefined" ||
      navigator.userAgent.indexOf("IEMobile") !== -1
    );
  }

  copyCode(e) {
    e.preventDefault();
    let target = e.target.closest(".uagb-tabs__body");
    let code = target.querySelector(".wp-block-prismatic-blocks code");
    let range = document.createRange();

    range.selectNode(code);
    window.getSelection().removeAllRanges(); //clear current selection
    window.getSelection().addRange(range); //select the text
    document.execCommand("copy"); // copy to clipboard
    window.getSelection().removeAllRanges(); // deselect everything
    this.successMessage(e);
  }

  copyURL(e) {
    e.preventDefault();
    let input = document.createElement("input");
    let text = window.location.href;
    document.body.appendChild(input);

    input.value = text;
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    this.successMessage(e);
  }

  successMessage(e) {
    let codeblock = e.target.closest(".uagb-tabs__body");
    let message = document.createElement("p");
    message.classList.add("messages");
    let node = document.createTextNode("Copied to clipboard");
    message.appendChild(node);

    let button = e.target.parentNode;
    codeblock.appendChild(message);

    let removeButton = setTimeout(() => {
      codeblock.removeChild(message);
    }, 1000);
  }
}

export default Copy;
