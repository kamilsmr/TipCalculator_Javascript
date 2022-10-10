// var temp = document.querySelector("button")
// console.log(temp)

// temp.innerText= "hi dear"

// console.log(temp.innerText)

// start queryselector

// const button = document.querySelector("button");
// console.log(button);
// button.innerHTML="hello";


// queryselectorall

const button = document.querySelectorAll("button");
const output = document.querySelector(".output");
const cost = document.querySelector("input");
console.log(button);

button.innerHTML="hello";

button.addEventListener("click",function(){
    console.log(cost.value);
    const cost=document.querySelector("input");
    output.innerText = "output";
})