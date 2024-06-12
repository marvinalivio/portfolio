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

window.addEventListener('scroll', function() {
    let getAnimate = document.getElementsByClassName('animate'); 
    for (let i = 0; i < getAnimate.length; i++){
        let bounding = getAnimate[i].getBoundingClientRect();
        if (bounding.top <= 100 && bounding.top <= (window.innerHeight || document.documentElement.clientHeight)){
            getAnimate[i].classList.add('letsAnimate');
            getAnimate[i].classList.remove('firstAnimate');
        }
        else{
            // getAnimate[i].classList.remove('letsAnimate');
            
        }
        console.log(bounding)
    }
})

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
