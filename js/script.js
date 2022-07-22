let navbar = document.querySelector('.header .flex .navbar');
let profile = document.querySelector('.header .flex .profile');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
   profile.classList.remove('active');
}

document.querySelector('#user-btn').onclick = () =>{
   profile.classList.toggle('active');
   navbar.classList.remove('active');
}

window.onscroll = () =>{
   navbar.classList.remove('active');
   profile.classList.remove('active');
}

let mainImage = document.querySelector('.quick-view .box .row .image-container .main-image img');
let subImages = document.querySelectorAll('.quick-view .box .row .image-container .sub-image img');

subImages.forEach(images =>{
   images.onclick = () =>{
      src = images.getAttribute('src');
      mainImage.src = src;
   }
});




$(document).ready(function(){

   $('#itemslider').carousel({ interval: 3000 });
   
   $('.carousel-showmanymoveone .item').each(function(){
   var itemToClone = $(this);
   
   for (var i=1;i<6;i++) {
   itemToClone = itemToClone.next();
   
   if (!itemToClone.length) {
   itemToClone = $(this).siblings(':first');
   }
   
   itemToClone.children(':first-child').clone()
   .addClass("cloneditem-"+(i))
   .appendTo($(this));
   }
   });
   });
   