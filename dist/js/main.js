'use strict';

console.log('Hello World from app.js! \nhey');

document.querySelector('.logo img').addEventListener('click', function () {
    //show the vertical line menu
    document.querySelector('.vertical-line').classList.toggle('show');
    // document.querySelector('.dot1').classList.toggle('show');
});

document.querySelector('.mobile-menu img').addEventListener('click', function () {
    //show the mobile menu
    document.querySelector('.nav').classList.toggle('show');
    TweenMax.staggerTo('.nav ul li', 1.5, { opacity: 1 }, 0.5);
});

// ------------------------------------------------------------------------------------------


// gallery images


var dots = document.querySelectorAll('.slideCircles div');

var interiorImages = document.querySelectorAll('.interior.gallerySlide img');

var exteriorImages = document.querySelectorAll('.exterior.gallerySlide img');

//when you click interior, it shows you all interior images and hides exterior images
document.querySelector('.extAndInt h4:first-child').addEventListener('click', function () {

    //show interior images and hide exterior images
    document.querySelector('.interior.gallerySlide').style.display = 'flex';
    document.querySelector('.exterior.gallerySlide').style.display = 'none';

    // make h4 active when clicked - change color to orange
    document.querySelector('.extAndInt h4:last-child a').classList.remove('active');
    document.querySelector('.extAndInt h4:first-child a').classList.add('active');
});

//when you click exterior, it shows you all exterior images and hide interior images
document.querySelector('.extAndInt h4:last-child').addEventListener('click', function () {

    // show exterior images and hide interior images
    document.querySelector('.exterior.gallerySlide').style.display = 'flex';
    document.querySelector('.interior.gallerySlide').style.display = 'none';

    // make h4 active when clicked - change color to orange
    document.querySelector('.extAndInt h4:first-child a').classList.remove('active');
    document.querySelector('.extAndInt h4:last-child a').classList.add('active');
});

//loop through dots 

var _loop = function _loop(i) {
    console.log('add click listener to dot ' + i);

    // when you click each dot (i)
    dots[i].addEventListener('click', function () {
        console.log("you clicked dot number " + i);

        // loop through interior images and hide them...only show the one clicked i 
        for (var j = 0; j < interiorImages.length; j++) {
            interiorImages[j].style.display = 'none';
        }

        // loop through exterior images and hide them all...only show the one clicked i
        for (var k = 0; k < exteriorImages.length; k++) {
            exteriorImages[k].style.display = 'none';
        }

        // make interior image i display block - show just the one clicked
        interiorImages[i].style.display = 'block';

        // make exterior image i display block - show just the one clicked
        exteriorImages[i].style.display = 'block';
    });
};

for (var i = 0; i < dots.length; i++) {
    _loop(i);
}

// scroll effects
window.addEventListener("scroll", function () {
    console.log("scrolling!", window.scrollY);
});
//# sourceMappingURL=main.js.map
