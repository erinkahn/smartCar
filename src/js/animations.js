
// -------waypoints---------------------------------


var $top = $('.middle-top');

$top.waypoint(function () {
    console.log("does this happen more than once?")
    this.destroy() //only animate once

    TweenMax.from('.flexrow-items div', 1, { x:500, opacity: 0 });
    TweenMax.from('.headline', 1, {delay: 0.6, y:-150, opacity: 0 });
    TweenMax.from('.flexrow-items p', 1, {delay: 0.8, x:100, opacity: 0 }); 


   console.log('waypoint');
}, {offset: '90%'});



var $middle = $('.middle-middle');

$middle.waypoint(function () {

    this.destroy() //only animate once

    TweenMax.from('.left-side-p', 1, { x: 500, opacity: 0 }); //from the left
    TweenMax.from('.right-side-car', 2, {delay: 0.5, y:100, opacity:0 }); //from the top

    console.log('waypoint');
}, {offset: '90%'});




var $bottom = $('.middle-bottom');

$bottom.waypoint(function () {
    this.destroy() //only animate once

    TweenMax.from('.flexcolumn-items div', 2, { x: 500, opacity: 0 }); 
    TweenMax.from('.headline2', 1, {delay: 1, x:-150, opacity: 0 });
    TweenMax.from('.flexcolumn-items p', 2, {delay: 1.2, y:100, opacity:0 }); 

    console.log('waypoint');
}, {offset: '90%'});




var $models = $('.models');

$models.waypoint(function () {
    this.destroy() //only animate once

    TweenMax.from('.modelsTitle', 2, {opacity: 0 });  
    TweenMax.from('.coupe-container .car-title h3',  1, {x:500, opacity: 0 }); 
    TweenMax.from('.cabrio-container .car-title h3', 1, {x:-500, opacity: 0 });
    TweenMax.from(".pure img",  1, {delay: 0.8, y:-100, opacity: 0 }); 
    TweenMax.from(".passionA img",  1, {delay: 1.2, y:-100, opacity: 0 }); 
    TweenMax.from(".passionB img",  1, {delay: 1.4, y:-100, opacity: 0 }); 
    TweenMax.from(".prime img",  1, {delay: 1.6, y:-100, opacity: 0 });
    TweenMax.from(".cars-container h4",  1, {delay: 2, opacity: 0 });
    TweenMax.from(".cars-container p",  1, {delay: 2.3, opacity: 0 });
    TweenMax.from(".cars-container a",  1, {delay: 2.5, opacity: 0 });

  console.log('waypoint');
}, {offset: '90%'});




var $gallery = $('.gallery');

$gallery.waypoint(function () {

    this.destroy() //only animate once

    TweenMax.from('.galleryTitle', 2, { opacity: 0 }); 
    TweenMax.from('.extAndInt', 1, {delay: 0.5, x:150, opacity: 0 });
    TweenMax.from('.gallerySlide', 2, {delay: 0.8, y :100, opacity:0 }); 
    TweenMax.from('.slideCircles', 2, {delay: 1, x :-100, opacity:0 }); 

  console.log('waypoint');
}, {offset: '90%'});





var $community = $('.callToAction');

$community.waypoint(function () {
    this.destroy() //only animate once

    TweenMax.from('.community h1', 1.4, { y: 100, opacity: 0 });
    TweenMax.from('.buttons', 1, {delay: 0.4, y :-100, opacity:0 }); 

  console.log('waypoint');
}, {offset: '90%'});

