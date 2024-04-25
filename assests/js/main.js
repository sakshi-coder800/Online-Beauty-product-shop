let navbar = document.querySelector('.header .flex .navbar');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
}

let account = document.querySelector('.user-account');

document.querySelector('#user-btn').onclick = () =>{
   account.classList.add('active');
}

document.querySelector('#close-account').onclick = () =>{
   account.classList.remove('active');
}

let myOrders = document.querySelector('.my-orders');

document.querySelector('#order-btn').onclick = () =>{
   myOrders.classList.add('active');
}

document.querySelector('#close-orders').onclick = () =>{
   myOrders.classList.remove('active');
}

let cart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
   cart.classList.add('active');
}

document.querySelector('#close-cart').onclick = () =>{
   cart.classList.remove('active');
}

window.onscroll = () =>{
   navbar.classList.remove('active');
   myOrders.classList.remove('active');
   cart.classList.remove('active');
};

let slides = document.querySelectorAll('.home-bg .home .slide-container .slide');
let index = 0;

function next(){
   slides[index].classList.remove('active');
   index = (index + 1) % slides.length;
   slides[index].classList.add('active');
}

function prev(){
   slides[index].classList.remove('active');
   index = (index - 1 + slides.length) % slides.length;
   slides[index].classList.add('active');
}

let accordion = document.querySelectorAll('.faq .accordion-container .accordion');

accordion.forEach(acco =>{
   acco.onclick = () =>{
      accordion.forEach(remove => remove.classList.remove('active'));
      acco.classList.add('active');
   }
});



// Function to toggle between themes
function toggleTheme() {
   document.body.classList.toggle('dark'); // Toggle the 'dark' class on the body
   // alert()
}

// Event listener for the toggle button
document.getElementById('toggleButton').addEventListener('click', toggleTheme);
   



  // AOS Animation
  AOS.init({
   disable: 'mobile',
   duration: 1200,
})

// Get the button element
var scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Add scroll event listener to the window
window.addEventListener("scroll", function() {
    // Check if the scroll position is greater than or equal to 100 pixels
    if (window.scrollY >= 100) {
        // Display the scroll-to-top button
        scrollToTopBtn.style.display = "block";
    } else {
        // Hide the scroll-to-top button
        scrollToTopBtn.style.display = "none";
    }
});

// Add click event listener to the button
scrollToTopBtn.addEventListener("click", function() {
    // Scroll to the top of the page
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scrolling animation
    });
});
