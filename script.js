const burger = document.querySelector("nav");

console.log(burger)

burger.addEventListener("click", function(e) {
    if (e.target.tagName === "svg") {
        const menu = document.querySelector(".subMenu");
        if (menu.style.display === "none" || menu.style.display === "") {
            menu.style.display = "flex"
        } else {
            menu.style.display = "none"
        }
    }
})