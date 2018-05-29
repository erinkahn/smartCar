console.log(`Hello World from app.js! 
hey`)


document.querySelector('.logo img').addEventListener('click', function(){
    //show the vertical line menu
    document.querySelector('.vertical-line').classList.toggle('show');
    // document.querySelector('.dot1').classList.toggle('show');
})


document.querySelector('.mobile-menu img').addEventListener('click', function(){
    //show the mobile menu
    document.querySelector('.nav').classList.toggle('show');
    TweenMax.staggerTo('.nav ul li', 1.5, {opacity: 1}, 0.5);
})



// ------------------------------------------------------------------------------------------


// gallery images


//STEP 1 Declare variables;
//let images = document.querySelectorAll('whatever your images are')
//let dots = document.querySelectorAll('dots')

// SO, what this returns is 2 arrays one for dots one for images. 

// STEP 2 add an Event listener so we know the dots are //clicked on since we need to add alot of event listeners and //we have an array we can use a loop i.e.

//for ( let i = 0; i < images.length //(or dots.length since they shoudl be the same length)\\ ; i++) {
    //dots[i].addEventListener('click', function() {

    // STEP 3 we need to decide what to do when a dot is     //clicked
    
// First Hide all the images using a loop   --HINT: for images.length images.classList.remove('whatever class makes them show')
// SECOND we need to add a class to the image that we want to see
// since dots[i] should show images[i] and we are technically still inside the top loop (the one we made the event listener in) 
// and no longer in the bottom loop( to remove the classes) we can just say images[i].classList.add('the class name that shows the image')



let dots = document.querySelectorAll('.slideCircles div');
let interiorImages = document.querySelectorAll('.interior.gallerySlide img');


//when you click interior, it shows you all interior images and hides exterior images
document.querySelector('.extAndInt h4:first-child').addEventListener('click', function(){

    document.querySelector('.interior.gallerySlide').style.display = 'flex';
    document.querySelector('.exterior.gallerySlide').style.display = 'none';


    //loop through dots and images
    for (let i = 0; i < dots.length; i++) {
        interiorImages[i].addEventListener('click', function() {
            
        }) 
            
     })
    }
      
})



let exteriorImages = document.querySelectorAll('.exterior.gallerySlide img');

//when you click exterior, it shows you all exterior images and hide interior images
document.querySelector('.extAndInt h4:last-child').addEventListener('click', function(){

    document.querySelector('.exterior.gallerySlide').style.display = 'flex';
    document.querySelector('.interior.gallerySlide').style.display = 'none';

    //loop through dots and images
    for (let i = 0; i < dots.length; i++) {
        exteriorImages[i].addEventListener('click', function() {
            
        }) 
            
     })
    }
})



