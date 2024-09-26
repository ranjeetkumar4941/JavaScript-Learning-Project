let box1=document.getElementById("box1");
let box2=document.getElementById("box2");
let box3=document.getElementById("box3");
let container=document.querySelector(".container");

box1.addEventListener("mouseenter", () => {
    const box1Style = window.getComputedStyle(box1);
    container.style.backgroundColor=box1Style.backgroundColor;
});
box1.addEventListener("mouseleave", () => {
    container.style.backgroundColor="white";
});
box2.addEventListener("mouseenter", () => {
    const box2Style = window.getComputedStyle(box2);
    container.style.backgroundColor=box2Style.backgroundColor;
});
box2.addEventListener("mouseleave", () => {
    container.style.backgroundColor="white";
});
box3.addEventListener("mouseenter", () => {
    const box3Style = window.getComputedStyle(box3);
    container.style.backgroundColor=box3Style.backgroundColor;
});
box3.addEventListener("mouseleave", () => {
    container.style.backgroundColor="white";
});