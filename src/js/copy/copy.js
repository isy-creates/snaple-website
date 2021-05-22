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

//1. create constructor
//2. create copyCode
//3. create successMessage
//4. create error message
//5. create mobile version
