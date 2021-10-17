export default function drag() {
  const element = document.querySelector(".pattern__preview");
  const isResized = false;

  if (handle) {
    handle.addEventListener("mousedown", initResize, false);
  }

  //Window funtion mousemove & mouseup
  function initResize(e) {
    window.addEventListener("mousemove", Resize, false);
    window.addEventListener("mouseup", stopResize, false);
    window.addEventListener("resize", removeWidth, false);
  }
  //resize the element
  function Resize(e) {
    isResized = true;
    element.style.width = width - element.offsetLeft + "px";
  }
  //on mouseup remove windows functions mousemove & mouseup
  function stopResize(e) {
    window.removeEventListener("mousemove", Resize, false);
    window.removeEventListener("mouseup", stopResize, false);
  }

  function removeWidth() {
    console.log("resize");
    if (isResized) {
      console.log("test");
      element.style.width = 0 + "auto";
    }
  }
}
