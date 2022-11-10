"use strict"

const like = document.querySelector("._button");
const smile = document.querySelector("._button2");
const heart = document.querySelector(".fa-heart");
const counter = document.querySelector(".count")
const ghost = document.querySelector(".fa-ghost");
let containerCreate = document.querySelector(".canvas");
let main = document.main;
        

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

smile.addEventListener("click", event => {
    if(smile.classList.contains("active")){
        while(containerCreate.lastElementChild){
            containerCreate.removeChild(containerCreate.lastElementChild);
        }
        smile.classList.remove("active");
    }
    else smile.classList.add("active");
});
let x = 0;
let y = 0;

containerCreate.addEventListener('mousemove', (e) => {
    
    let newHeart = document.createElement("img");
    newHeart.src = "heart.png";
    newHeart.style.width = "3rem";
    newHeart.style.height = "3rem";
    let localY = e.pageY - containerCreate.getBoundingClientRect().top;
    let localX = e.pageX - containerCreate.getBoundingClientRect().left;

    if(smile.classList.contains("active") && Math.abs(x - localX) > 5 && Math.abs(y - localY) > 5){
        newHeart.classList.add("smile");
        newHeart.classList.add("created-heart");
        // Если тащат, то высчитываем новое положение,
        // вычитая начальное положение элемента из положения курсора.
        newHeart.style.top = `${localY}px`;
        newHeart.style.left = `${localX}px`;
        containerCreate.append(newHeart);
        x = localX;
        y = localY;
    }
  });


// smile.addEventListener('click', event => {
//     if(ghost.style.opacity == 0) {
//         ghost.style.opacity = 1;
//         ghost.style.top = event.clientY+"px";
//         ghost.style.left = event.clientX+"px";
//     } else {ghost.style.opacity = 0;}
// });

// ghost.addEventListener('mousemove',
// function(e) {
//     ghost.style.left = e.clientX+"px";
//     ghost.style.top = e.clientY+"px";
// });
