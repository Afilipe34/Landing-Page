const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    })

});

const appearOptions = {
    threshold: 0,
    rootMargin:"0px 0px -100px 0px"
};

const hiddenElements = document.querySelectorAll('.index-services-box');
hiddenElements.forEach((el) => observer.observe(el));




const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
    const windowTop = window.pageYOffset + (window.innerHeight *3 / 4);
    target.forEach(function(element){
        if ((windowTop) > element.offsetTop) {
            element.classList.add(animationClass);
        }
    })
}


window.addEventListener('scroll', function() {
    animeScroll();
})




let list = document.querySelectorAll('.sci li');
let bg = document.querySelector ('.index-contact')
list.forEach(elements => {
    elements.addEventListener('mouseenter', function (event) {
        let color = event.target.getAttribute('data-color');
        bg.style.backgroundColor = color;
    })
    elements.addEventListener('mouseleave', function (event) {
        
        bg.style.backgroundColor = 'black';
    })
})







window.addEventListener("scroll", function(){
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})








