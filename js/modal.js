var modal = document.getElementById("my_modal");
var openModal = document.getElementById("btn_modal_window");
var span = document.getElementsByClassName("close_modal_window")[0];

openModal.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

console.log(typeof alert);
