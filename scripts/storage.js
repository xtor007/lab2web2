function addToSt() {
  window.location.reload();
}

function delInSt() {
  localStorage.setItem('imgs','')
  window.location.reload();
}

function selecty() {
  let newForm =  document.getElementsByClassName("_y");
  newForm[0].classList.remove("_notVisible")
}
