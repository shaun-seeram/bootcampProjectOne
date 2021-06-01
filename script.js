function click() {
    const menu = document.querySelector(".subMenu");
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "flex"
    } else {
        menu.style.display = "none"
    }
}