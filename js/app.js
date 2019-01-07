var form = document.querySelector(".form-search");
var btn = document.querySelector(".hotel-button");

btn.addEventListener("click", function(evt) {
    evt.preventDefault();
    if (form.classList.contains("form-close")) {
        form.classList.remove("form-close");
    } else {
        form.classList.add("form-close");
    }
})