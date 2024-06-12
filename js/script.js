window.addEventListener('scroll', function() { 
    let scrollPosition = window.scrollY; 
    let windowWidth = window.innerWidth; 
    let element = document.querySelector('body'); 
    if (windowWidth >= 768 && scrollPosition > 0) { 
        element.classList.add('scrolled');
        } 
        else {
             element.classList.remove('scrolled'); 
        } 
        
}); 

let animateClass = document.getElementById('aboutMe');

window.onscroll = function(){
    getAnimate(animateClass);
}

function getAnimate(animateClass){
    
    if (window.scrollY === 0 && animateClass === window.scrollY){
        animateClass.classList.add("goAnimate")
    }
    else {
        animateClass.classList.remove("goAnimate")
    }
}


let menu = document.getElementById("menu");
let closeNav = document.getElementById("closeNav");
function openNav(){
    menu.style.top = "0";
    closeNav.style.display = "inline-block"
}

function closeNow(){
    menu.style.top = "-100vh"
    closeNav.style.display = "none"
}

function closeNo(){
    menu.style.top = "-100vh"
    closeNav.style.display = "none"
};
