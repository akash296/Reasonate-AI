/* =========================
   CUSTOM CURSOR
========================= */

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

cursor.style.left = e.clientX + "px";
cursor.style.top = e.clientY + "px";

});


/* =========================
   SCROLL NAVBAR
========================= */

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>60){

header.style.background="rgba(5,8,22,.85)";
header.style.boxShadow="0 10px 30px rgba(0,0,0,.25)";

}else{

header.style.background="rgba(5,8,22,.5)";
header.style.boxShadow="none";

}

});


/* =========================
   SCROLL REVEAL
========================= */

const revealItems=document.querySelectorAll(
".card,.about-box,.price-card,.contact,footer"
);

function reveal(){

const trigger=window.innerHeight*0.85;

revealItems.forEach(item=>{

const top=item.getBoundingClientRect().top;

if(top<trigger){

item.style.opacity="1";
item.style.transform="translateY(0)";

}

});

}

revealItems.forEach(item=>{

item.style.opacity="0";
item.style.transform="translateY(80px)";
item.style.transition=".8s";

});

window.addEventListener("scroll",reveal);

reveal();


/* =========================
   COUNTER
========================= */

const numbers=document.querySelectorAll(".stats h2");

numbers.forEach(number=>{

const target=number.innerText;

const value=parseInt(target.replace(/\D/g,""));

let count=0;

const speed=Math.max(1,Math.floor(value/100));

const timer=setInterval(()=>{

count+=speed;

if(count>=value){

count=value;

clearInterval(timer);

}

if(target.includes("%")){

number.innerText=count+"%";

}else if(target.includes("K")){

number.innerText=count+"K+";

}else{

number.innerText=count+"+";

}

},20);

});


/* =========================
   BUTTON RIPPLE
========================= */

document.querySelectorAll("button").forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="scale(1.05)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="scale(1)";

});

});


/* =========================
   FLOATING PARTICLES
========================= */

const particles=document.getElementById("particles");

for(let i=0;i<45;i++){

let dot=document.createElement("span");

dot.style.position="absolute";

dot.style.width=Math.random()*6+2+"px";

dot.style.height=dot.style.width;

dot.style.borderRadius="50%";

dot.style.background="rgba(79,70,229,.5)";

dot.style.left=Math.random()*100+"vw";

dot.style.top=Math.random()*100+"vh";

dot.style.animation=`floatParticle ${5+Math.random()*8}s linear infinite`;

particles.appendChild(dot);

}


/* =========================
   SMOOTH SCROLL
========================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});


/* =========================
   MOBILE MENU
========================= */

const menu=document.querySelector(".menu-btn");
const nav=document.querySelector(".nav-links");

menu.addEventListener("click",()=>{

nav.classList.toggle("active");

});


console.log("NeuroSync AI Loaded Successfully");