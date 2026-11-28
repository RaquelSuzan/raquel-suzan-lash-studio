const suzi = document.getElementById("suzi");
const suziChat = document.getElementById("suzi-chat");
const suziToggle = document.getElementById("suzi-toggle");
const suziClose = document.getElementById("suzi-close");

suziToggle.addEventListener("click", () => {
  suziChat.classList.add("ativo");
  suzi.style.display = "none";
});

suziClose.addEventListener("click", () => {
  suziChat.classList.remove("ativo");
  suzi.style.display = "flex";
});
