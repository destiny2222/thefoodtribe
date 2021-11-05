const menu = document.querySelector("#mobile-menu");
const menullinks = document.querySelector(".nav-items");

menu.addEventListener('click', function(){
  menu.classList.toggle('is-active');
  menullinks.classList.toggle('active');
});



  /**
   * Back to top button
   */
   let backtotop = select('.back-to-top')
   if (backtotop) {
     const toggleBacktotop = () => {
       if (window.scrollY > 100) {
         backtotop.classList.add('active')
       } else {
         backtotop.classList.remove('active')
       }
     }
     window.addEventListener('load', toggleBacktotop)
     onscroll(document, toggleBacktotop)
   }
 
   /** end    */



