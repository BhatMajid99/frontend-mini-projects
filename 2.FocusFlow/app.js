const menuIcon = document.getElementById("menubtn");
const navLinks = document.getElementById("navLinks");
const cutIcon = document.getElementById("cutBtn");


menuIcon.addEventListener("click", () => {
    navLinks.classList.add("active");
    console.log("button was clicked");
});
cutIcon.addEventListener("click", () => {
    console.log("Cut button was clicked");
    navLinks.classList.remove("active");
})