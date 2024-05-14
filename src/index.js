import "./style.css";
import {containerHome} from "./home";
import {containerMenu} from "./menu";
import { containerAbout } from "./about";

const content=document.querySelector("#content");
const home=document.querySelector("#home");
const menu=document.querySelector("#menu");
const about=document.querySelector("#about");

content.appendChild(containerHome);

home.addEventListener("click",()=>{
    while(content.firstChild) { 
        content.removeChild(content.firstChild); 
    }
    content.appendChild(containerHome);
})

menu.addEventListener("click",()=>{
    while(content.firstChild) { 
        content.removeChild(content.firstChild); 
    }
    content.appendChild(containerMenu);
})

about.addEventListener("click",()=>{
    while(content.firstChild) { 
        content.removeChild(content.firstChild); 
    }
    content.appendChild(containerAbout);
})
