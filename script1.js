document.querySelector(".no").addEventListener("mouseover", function (e) {
  const moveDistance = 300;
  let newTop, newLeft;

  let angle = Math.random() * 2 * Math.PI;

  let moveX = Math.cos(angle) * moveDistance;
  let moveY = Math.sin(angle) * moveDistance;

  let currentTop = e.target.offsetTop;
  let currentLeft = e.target.offsetLeft;

  newTop = currentTop + moveY;
  newLeft = currentLeft + moveX;

  if (newTop < 0 || newTop > window.innerHeight - e.target.offsetHeight) {
    newTop = currentTop - moveY;
  }
  if (newLeft < 0 || newLeft > window.innerWidth - e.target.offsetWidth) {
    newLeft = currentLeft - moveX;
  }

  e.target.style.position = "absolute";
  e.target.style.top = newTop + "px";
  e.target.style.left = newLeft + "px";
});
