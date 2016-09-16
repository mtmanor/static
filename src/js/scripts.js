$(function(){

  var mobileNav = function() {
    var mobileNavTrigger = $('.mobile-nav-btn');
    var mobileNavContainer = $('.main-nav ul');

    mobileNavTrigger.bind('click', function(e){
      e.preventDefault();
      $(this).toggleClass('is-active');
      mobileNavContainer.toggleClass('is-active');
    });
  }

  var productFilterToggle = function() {
    var productFilterTrigger = $('.product-filter-toggle');
    var productFilterCategories = $('.product-filter-categories');

    productFilterTrigger.bind('click', function(e){
      e.preventDefault();
      $(this).parent().find(productFilterCategories).slideToggle();
    });
  }

  mobileNav();
  productFilterToggle();

});