// navbar
document.getElementById("list_header").addEventListener("click",()=>{
    document.getElementsByClassName("firstUl")[0].classList.toggle("activeUl");
    // document.querySelectorAll(".header_links").forEach(link=>{
    //     link.classList.toggle("activeLink_header");
    // })
})
// section 1
var section1 = document.querySelector(".section1");
var imgs = ["img4.jpg","img2.webp","img3.jpg"];
section1.style.background='url("'+"img/"+imgs[0]+'")';
section1.style.backgroundSize='cover';
section1.style.backgroundRepeat='no-repeat';
var ctr=0;
setInterval(()=>{
     if(ctr==imgs.length-1){
        ctr=0;
     } 
     else{
        ctr++;
     }
     section1.style.background='url("'+"img/"+imgs[ctr]+'")';
     section1.style.backgroundSize='cover';
     section1.style.backgroundRepeat='no-repeat';

},4500);
window.onscroll = ()=>{
    if(window.scrollY>400){
       document.getElementById("header").classList.add("header_active");  
    }
    else{
        document.getElementById("header").classList.remove("header_active");
    }
}

