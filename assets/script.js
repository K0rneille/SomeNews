

"use strict" ;


const toggle = document.querySelector(".menu__toggle");
const menu = document.querySelector(".navigation");
const linkList=document.querySelector(".navigation__list");
const link = document.querySelectorAll(".navigation__button");
const back = document.querySelector(".nav--hidden");

if (toggle){

    toggle.addEventListener("click",MenuOpen);

}

    for(let i of link){
            i.addEventListener("click", MenuOpen);
             
    }





function MenuOpen(){
    menu.classList.toggle("menu--open");
        if (back.classList.contains("nav--hidden")){
            back.classList.remove("nav--hidden");
        } else {
            back.classList.add("nav--hidden");
        }
}

