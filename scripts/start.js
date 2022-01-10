window.onload = function() {
  //change 2 and 6 block
  let block2 = document.querySelector("header");
  let block6 = document.querySelector("footer");
  let tmp = block2.innerHTML;
  block2.innerHTML = block6.innerHTML;
  block6.innerHTML = tmp;

  //add to 5 rhombus area
  const a = 5;
  const b = 9;
  let s = a*b/2
  let block5 = document.querySelector("article");
  block5.innerHTML += `<p>The area of the rhombus is ${s}</p>`
}
