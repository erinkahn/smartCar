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


//when you click interior, it shows you all interior images and hides exterior images
document.querySelector('.extAndInt h4:first-child').addEventListener('click', function () {

    document.querySelector('.interior.gallerySlide').style.display = 'flex';
    document.querySelector('.exterior.gallerySlide').style.display = 'none';

    var interiorDots = document.querySelectorAll('.slideCircles div');
    var interiorImages = document.querySelectorAll('.interior.gallerySlide img');
    var currentDot = 0;
    var currentImage = 0;

    //loop through dots and images
    for (var i = 0; i < interiorDots.length; i++) {
        interiorDots[i].addEventListener('click', function () {});
        dot[i].addEventListener('click', function () {
            for (var _i = 0; _i < interiorImages.length; _i++) {
                interiorImages[_i].classList.remove('active');
            }
        });
    }
});

//when you click exterior, it shows you all exterior images and hide interior images
document.querySelector('.extAndInt h4:last-child').addEventListener('click', function () {

    document.querySelector('.exterior.gallerySlide').style.display = 'flex';
    document.querySelector('.interior.gallerySlide').style.display = 'none';

    //loop through dots and images
});
//# sourceMappingURL=main.js.map
