"use strict"

const like = document.querySelector("._button");
const smile = document.querySelector("._button2");
const heart = document.querySelector(".fa-heart");
const counter = document.querySelector(".count")
const ghost = document.querySelector(".fa-ghost");
        

//ЗАДАНИЕ 1
// let reg = prompt("Желаете пройти регистрацию на сайте?").toLowerCase();
// while(true) {
//     if (reg === "да") {
//         alert("Круто!");
//         break;
//     } else {
//         alert("Попробуй ещё раз!");
//     }
//     reg = prompt("Желаете пройти регистрацию на сайте?").toLowerCase();
// }

//ЗАДАНИЕ 2
// let login = prompt("Введите логин:");
// if(login === "admin") {
//     let pass = prompt("Хорошо. Введите пароль:");
//     if(pass === "Я главный") alert("Здравствуйте! ^^");
//     else if(pass === null || pass === '') alert("Отменено!");
//     else alert("Неверный пароль.");
// } else if (login === null || login === '') alert("Отменено.");
// else alert("Я вас не знаю >.<");



//ЗАДАНИЕ 3
like.addEventListener('click', event => {
    if(heart.style.color == "red") {
        like.style.backgroundColor = "darkgrey";
        heart.style.color = "azure";
        heart.style.marginRight = "0px";
        counter.innerHTML = null;
        heart.style.border = "none";
    } else {
        like.style.backgroundColor = "pink";
        heart.style.color = "red";
        heart.style.marginRight = "15%";
        counter.classList.add("count");
        counter.innerHTML = "1";
    }
}
);


//ЗАДАНИЕ 4
smile.addEventListener('click', event => {
    if(ghost.style.opacity == 0) {
        ghost.style.opacity = 1;
        ghost.style.top = event.clientY+"px";
        ghost.style.left = event.clientX+"px";
    } else {ghost.style.opacity = 0;}
});

ghost.addEventListener('mousemove',
function(e) {
    ghost.style.left = e.clientX+"px";
    ghost.style.top = e.clientY+"px";
});
