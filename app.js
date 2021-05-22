const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const section = document.querySelector("section");
const image_container = document.querySelector(".imgContainer");
const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");

let header_height = header.offsetHeight;
let section_height = section.offsetHeight;

window.addEventListener("scroll",()=>{
    let scroll= window.pageYOffset; //Number of pixel by which we scrolled upward
    let sectionY = section.getBoundingClientRect() ; 
    
    //Getting the value of attribute "data-speed" 
    translate.forEach(element => {
        let speed = element.dataset.speed;
        
        //We will move each element based on the result of multiplying scroll value by speed value.
        element.style.transform = `translateY(${scroll * speed}px)`;
    })

    opacity.forEach(element => {
        element.style.opacity = -1 + scroll / (header_height / 2 );
    })

    border.style.width = `${scroll / (sectionY.top + section_height) * 30}%`

    big_title.style.opacity = - scroll / (header_height / 2 ) + 1; //Making Title Disappear 
    shadow.style.height = `${scroll * 0.5 + 300 }px`;

    content.style.transform =`translateY(${scroll / (section_height + sectionY.top ) * 50 - 50}px)`;
    image_container.style.transform =`translateY(${scroll / (section_height + sectionY.top ) * -50 + 50}px)`;


})