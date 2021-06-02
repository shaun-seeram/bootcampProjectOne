// Burger Menu uwu

const burger = document.querySelector("nav");
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

// Created a color change on hover of H1 elements
const header = document.querySelector("h1");

header.addEventListener("mouseover", function() {
    header.style.color = "#86e0f9";
})

// Comments to the blog post, post
const form = document.querySelector("form");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.querySelector("#name").value;
    const message = document.createTextNode(document.querySelector("#message").value).data;

    const newArticle = document.createElement("article");
    newArticle.innerHTML =
    `<div class="avatar"><img src="./images/comment-1.jpg" alt="User's profile picture."></div>
    <div class="comment">
    <p class="data"><time datetime="2018-10-09">Tuesday, October 9th, 2018</time> by ${name}</p>
    <p>${message}</p>
    </div>`

    const comments = document.querySelector(".comment-section");
    comments.appendChild(newArticle);

})