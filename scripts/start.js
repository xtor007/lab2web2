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

  //form
  let form = document.querySelector("form");
  if (parsCook("MAX") !== "a") {
    form.classList.add("_notVisible")
    let isDelCookie = confirm("Delete cookie?")
    if (isDelCookie) {
      delete_cookie("MAX")
      delete_cookie("MIN")
      window.location.reload();
    } else {
      alert("You won't be able to interact with the form until you refresh the page");
    }
  }
}

function parsCook(name) {
  let allCookies = document.cookie.split("; ");
  for(let cook of allCookies){
    let cookData = cook.split("=");
    if(cookData[0] === name){
        return cookData[1]
    }
  }
  return "a"
}

function delete_cookie(name) {
  document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
