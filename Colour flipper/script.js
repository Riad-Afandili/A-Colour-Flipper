'use strict';

const colours = ["green", "red", "#f1f5f8", "blue", "black"];
const array = []

const btn = document.getElementById("btn");
const btnBack = document.getElementById("btn-back");
const btnForward = document.getElementById("btn-forward");
const colour = document.querySelector(".colour");

btn.addEventListener('click', function () {
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colours[randomNumber];
    colour.textContent = colours[randomNumber]
    array.push(randomNumber)
    console.log(array);
})

btnBack.addEventListener('click', function () {
    const back = array.pop()
    console.log(back);
    document.body.style.backgroundColor = colours[back];
    colour.textContent = colours[back]
})

function getRandomNumber() {
    return Math.floor(Math.random()* colours.length)
}
