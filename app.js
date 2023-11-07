document.querySelector('.menu-btn').addEventListener('click', () => document.querySelector('.main-menu').classList.toggle('show'));

$( '.js-input' ).keyup(function() {
    if( $(this).val() ) {
       $(this).addClass('not-empty');
    } else {
       $(this).removeClass('not-empty');
    }
  });