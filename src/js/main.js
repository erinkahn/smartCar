console.log(`Hello World from app.js! 
hey`)


document.querySelector('.mobile-menu img').addEventListener('click', function(){
    //show the mobile menu
    document.querySelector('.nav').classList.toggle('show');
    TweenMax.staggerTo('.nav ul li', 1.5, {opacity: 1}, 0.5);
})



// ------------------------------------------------------------------------------------------


// gallery images


let dots = document.querySelectorAll('.slideCircles div');

let interiorImages = document.querySelectorAll('.interior.gallerySlide img');

let exteriorImages = document.querySelectorAll('.exterior.gallerySlide img');


//when you click interior, it shows you all interior images and hides exterior images
document.querySelector('.extAndInt h4:first-child').addEventListener('click', function(){

    //show interior images and hide exterior images
    document.querySelector('.interior.gallerySlide').style.display = 'flex';
    document.querySelector('.exterior.gallerySlide').style.display = 'none';

    // make h4 active when clicked - change color to orange
    document.querySelector('.extAndInt h4:last-child a').classList.remove('active');
    document.querySelector('.extAndInt h4:first-child a').classList.add('active');
    
})

//when you click exterior, it shows you all exterior images and hide interior images
document.querySelector('.extAndInt h4:last-child').addEventListener('click', function(){

    // show exterior images and hide interior images
    document.querySelector('.exterior.gallerySlide').style.display = 'flex';
    document.querySelector('.interior.gallerySlide').style.display = 'none';

    // make h4 active when clicked - change color to orange
    document.querySelector('.extAndInt h4:first-child a').classList.remove('active');
    document.querySelector('.extAndInt h4:last-child a').classList.add('active');

})


//loop through dots 
for (let i = 0; i < dots.length; i++) {
    console.log('add click listener to dot ' + i)

    // when you click each dot (i)
    dots[i].addEventListener('click', function() {
        console.log("you clicked dot number " + i)

        // loop through interior images and hide them...only show the one clicked i 
        for (let j = 0; j < interiorImages.length; j++){
            interiorImages[j].style.display = 'none';
        }

        // loop through exterior images and hide them all...only show the one clicked i
        for (let k = 0; k < exteriorImages.length; k++){
            exteriorImages[k].style.display = 'none';
        }

        // make interior image i display block - show just the one clicked
        interiorImages[i].style.display = 'block';

        // make exterior image i display block - show just the one clicked
        exteriorImages[i].style.display = 'block';
    }) 
}


// // ------------------------------------------------------------------------------------------


//vertical line under logo

// document.querySelector('.logo img').addEventListener('click', function(){
//     //show the vertical line menu
//     document.querySelector('.vertical-line').classList.toggle('show');
//     // document.querySelector('.dot1').classList.toggle('show');
// })




// // logo active dots 


// //loop through .vertical-line
// // when you click a dot add the class of active
// // remove the class of active

// let allVerticalDots = document.querySelectorAll('.dot');

// for (let i = 0; i < allVerticalDots.length; i++){
//     console.log('allVerticalDots[i]');

//     allVerticalDots[i].addEventListener('click', function() {

//         if (allVerticalDots[i].classList.contains('active')){
//             allVerticalDots[i].classList.remove('active');
//         } else {
//             allVerticalDots[i].classList.add('active');
//         }
 
//     })
// }





// ------------------------------------------------------------------------------------------

// scroll effects
// window.addEventListener("scroll", function() {
//     console.log("scrolling!", window.scrollY)
// })
// this shit is hard use waypoints instead