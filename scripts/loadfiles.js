function loadImg(form) {
  let block1 = document.querySelector("aside");
  let imgcode = `<img src="${form.imgLink.value}" alt="Dont load">`
  block1.innerHTML += imgcode
  let prev = localStorage.getItem('imgs')
  console.log(prev)
  if (prev === null) {
    localStorage.setItem('imgs',imgcode)
  } else {
    localStorage.setItem('imgs',prev+imgcode)
  }
  return false
}
