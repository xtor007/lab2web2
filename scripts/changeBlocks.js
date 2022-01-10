window.onload = function() {
  let block2 = document.querySelector("header");
  let block6 = document.querySelector("footer");
  let tmp = block2.innerHTML;
  block2.innerHTML = block6.innerHTML;
  block6.innerHTML = tmp;
}
