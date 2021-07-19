export default function drag() {
  var element = document.querySelector(".pattern__preview");
  var handle = document.querySelector("#handle");

  if (handle) {
    handle.addEventListener("mousedown", initResize, false);
  }

  //Window funtion mousemove & mouseup
  function initResize(e) {
    window.addEventListener("mousemove", Resize, false);
    window.addEventListener("mouseup", stopResize, false);
  }
  //resize the element
  function Resize(e) {
    console.log(e);
    element.style.width = width - element.offsetLeft + "px";
  }
  //on mouseup remove windows functions mousemove & mouseup
  function stopResize(e) {
    window.removeEventListener("mousemove", Resize, false);
    window.removeEventListener("mouseup", stopResize, false);
  }
}

//was bedeutet false?
//
