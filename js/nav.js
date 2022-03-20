
const nav=document.querySelector("nav");
const nav_btn=document.querySelector(".nav_box");
const nav_exit=document.querySelector(".nav_close  i");
nav_btn.addEventListener("click",()=>{

    nav.style.display="flex";

});

nav_exit.addEventListener("click",()=>{

    nav.style.display="none";

});



// javascript for search option date field

const date_field=document.querySelector("#date");

var date = new Date();
var currentDate = date.toISOString().substring(0,10);
date_field.value = currentDate;
date_field.min = currentDate;


const date_tomo=document.querySelector(".date_choice");
// add a day
date.setDate(date.getDate() + 1);
var nextDate=date.toISOString().substring(0,10);


date_tomo.addEventListener("click",()=>{
    date_field.value=nextDate;
})

date.setDate(date.getDate() + 14);
date_field.max=date.toISOString().substring(0,10);