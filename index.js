// const title =document.getElementById("title");
// title.innerHTML ="Hi! from JS";
// title.style.color = "red"
// console.dir(document);
// document.title = 'I own you now'

// const title =document.querySelector("#title");
// title.innerHTML ="Hi! from JS";
// title.style.color = "red"
// console.dir(document);
// document.title = 'I own you now'

// const title =document.querySelector("#title");
// function handleresize(){
//     console.log("I have been resized");
// }
//https://github.com/Randung/Randung.git
// window.addEventListener("resize", handleresize);


// const title =document.querySelector("#title");
// function handleresize(event){
//     console.log(event);
// }

// window.addEventListener("resize", handleresize);

// const title =document.querySelector("#title");
// function handleclick(){
//     title.style.color =" blue"
// }

// window.addEventListener("click", handleclick);

// if(11 === 1){
//     console.log("hi")
// } else if(10 === 10){
//     console.log("ho")
// }else{
//     console.log("ha")
// 

// and codition
// if(20 > 5 && "nicolas" === "nicolas"){
//     console.log("yes")
// } else {
//     console.log("no")
// }

// or condition
// if(20 > 5  && "nicolas" === "nicolas"){
//     console.log("yes")
// } else {
//     console.log("no");`
// }
// prompt("Ask something");

// const age= prompt("how old are you");

// if(age >=18 && age <= 21 ){
//     console.log('you can drink but you should not')
// }else if(age>21){
//     console.log("you can drink")
// }else {
//     console.log("you cant")
// };

// const title =document.querySelector("#title");
// const BASE_COLOR = "rgb(52, 73, 94)";
// const OTHER_COLOR = "#95a5a6";

// function handleclick(){
//    const currentcolor= title.style.color;
//    if (currentcolor === BASE_COLOR){
//        title.style.color = OTHER_COLOR;
//    } else {
//        title.style.color = BASE_COLOR;
//    }
// }

// function init(){
//     title.style.color = BASE_COLOR;
//     window.addEventListener("mouseenter", handleclick);
// }
// init();

// function handleOffline(){
//     console.log("lalala")
// };
// function handleOnline(){
//     console.log("welcomeback")
// };
// window.addEventListener("online", handleOffline);
// window.addEventListener("online", handleOnline);
//https://developer.mozilla.org/en-US/docs/Web/API/Window/online_event

// const title =document.querySelector("#title");

// const CLICKED_CLASS ="clicked"

// function handleclick(){
//    const currentclass= title.className;
//    if (currentclass !== CLICKED_CLASS){
//        title.className = CLICKED_CLASS;
//    } else {
//        title.className = "";
//    }
// }

// function init(){
//     window.addEventListener("click", handleclick);
// }
// init();


// const title =document.querySelector("#title");

// const CLICKED_CLASS ="clicked";

// function handleclick(){
//    const hasClass= title.classList.contains(CLICKED_CLASS);
//    if (hasClass){
//        title.classList.remove(CLICKED_CLASS);
//    } else {
//        title.classList.add(CLICKED_CLASS);
//    }
// }

// function init(){
//     window.addEventListener("click", handleclick);
// }
// init();


const title =document.querySelector("#title");

const CLICKED_CLASS ="clicked";

function handleclick(){
   title.classList.toggle(CLICKED_CLASS);
}

function init(){
    window.addEventListener("click", handleclick);
}
init();

console.log("anything");

