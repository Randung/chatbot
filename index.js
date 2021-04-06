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
https://github.com/Randung/Randung.git
// window.addEventListener("resize", handleresize);


// const title =document.querySelector("#title");
// function handleresize(event){
//     console.log(event);
// }

// window.addEventListener("resize", handleresize);

const title =document.querySelector("#title");
function handleclick(){
    title.style.color =" blue"
}

window.addEventListener("click", handleclick);

