var link = document.querySelector(".feedback-link");
var popup = document.querySelector(".comments");
var overlay = document.querySelector(".overlay");
var close = popup.querySelector(".modal-close-main");
var contactName = popup.querySelector("[name=first-name]");
var form = popup.querySelector("form");
var email = popup.querySelector("[name=email-for-call]");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("comments-show");
  overlay.classList.add("overlay-show");
  contactName.focus();
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("comments-show");
  overlay.classList.remove("overlay-show");
  popup.classList.remove("comments-err");
});

form.addEventListener("submit", function(evt) {
    if (!contactName.value || !email.value)
    evt.preventDefault();
    popup.classList.remove("comments-err");
    popup.offsetWidth = popup.offsetWidth
    popup.classList.add("comments-err");
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("comments-show") || overlay.classList.contains("overlay-show")) {
            popup.classList.remove("comments-show");
            overlay.classList.remove("overlay-show");
            popup.classList.remove("comments-err");
        }
    }
});
