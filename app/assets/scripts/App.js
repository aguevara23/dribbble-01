import $ from 'jquery';

$(function() {
  $('.toggleNav').on("click", function() {
    $('.flex-nav').toggleClass('open');
  });
});
