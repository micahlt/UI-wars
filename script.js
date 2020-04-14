let roundBtn = document.getElementById("roundBtn");
let modal = document.getElementById("modal");
let modalBg = document.getElementById("modalBg");
let modalStatus = "closed";

function updateModal() {
  if (modalStatus == "closed") {
    modalBg.style.display = "block";
    modal.classList.replace("unmoved", "moved");
    modalStatus = "open";
  } else {
    modalBg.style.display = "none";
    modal.classList.replace("moved", "unmoved");
    modalStatus = "closed";
  }
}

roundBtn.addEventListener("click", updateModal);
modalBg.addEventListener("click", updateModal);