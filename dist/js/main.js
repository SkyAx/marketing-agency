/**
 * Created by sk_ax on 01.02.17.
 */
$(document).ready(function () {
   $('.header-top').delay(2000).slideDown('slow');
   $('.promo').delay(3000).fadeIn('slow');
   $('.promo-img').delay(3000).animate({
       right: '100px'
   }, 1000);
   $('.promo .btn').delay(4000).animate({
      opacity: 1
   });

   $('.partners').on('click', 'img', function () {
       $(this).siblings('.partners-info').toggleClass('active');
   });
});