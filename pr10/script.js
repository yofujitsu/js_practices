'use strict'
const text = document.querySelectorAll(".card");
//ЗАДАНИЕ 3
function truncate(str, maxlength) {
    return (str.length > maxlength) ? str.substr(0, maxlength - 3) + '...' : str;
}
for(let i = 0; i < text.length; ++i)
{
    text[i].textContent = text[i].textContent.trim();
    console.log(text[i].textContent.length);
    text[i].textContent = truncate(text[i].textContent, 1000);
    text[i].style.color = "white";
    text[i].style.fontSize = "18px";
}

//ЗАДАНИЕ 2
function Accumulator(startingValue) {
    this.value = Number(startingValue);
    this.read = function() {
        let x = prompt("Введите число:");
        this.value += Number(x);
        alert("Текущее значение суммы: " + this.value + "\n");
    }
}

let accum = new Accumulator(0);
for(let i = 0; i < 5; ++i) { accum.read();}


var captcha = document.querySelector(".captcha");
var btn = document.querySelector(".btn");

function generate() {
    let res = "";
    let alp = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for(let i = 0; i < 6; ++i) {
        res += alp.charAt(Math.floor(Math.random() * alp.length));
    }
    return res;
}

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

var randStr = generate();
var num1 = Math.ceil(Math.random() * 100 - 1);
var num2 = Math.ceil(Math.random() * 50 - 1);
var res = num1 + num2;
var input = document.querySelector("#answer");
btn.setAttribute('disabled','');
captcha.innerHTML = `${randStr}`;

answer.onchange = function() {
    if(input.value == randStr) {
        btn.removeAttribute('disabled');
    } else {
        captcha.innerHTML = `${num1} + ${num2} = `;
        if(Number(input.value) == res) btn.removeAttribute('disabled');
        else {
            alert("Ошибка!");
            btn.setAttribute('disabled','');
        }
    }
}

btn.addEventListener("click", event => {
    alert("Отправлено!");
})