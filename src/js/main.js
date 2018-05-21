console.log(`Hello World from app.js! 
hey`)


document.querySelector('.logo img').addEventListener('click', function(){
    //show the vertical line menu
    document.querySelector('.vertical-line').classList.toggle('show');
})


document.querySelector('.mobile-menu img').addEventListener('click', function(){
    //show the mobile menu
    document.querySelector('.nav').classList.toggle('show');
    TweenMax.staggerTo('.nav ul li', 1.5, {opacity: 1}, 0.5);
})
