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

  var cartDrawerToggle = function() {
    var cartDrawer = $('.cart-drawer');
    var cartLink = $('.header-cart-link');
    var cartOverlay = $('.cart-overlay');
    var continueShoppingBtn = $('.continue-shopping-btn');

    cartLink.bind('click', function(e){
      e.preventDefault();
      cartOverlay.addClass('js-is-visible');
      cartDrawer.addClass('js-is-open');
    });

    cartOverlay.bind('click', function(e){
      e.preventDefault();
      cartOverlay.removeClass('js-is-visible');
      cartDrawer.removeClass('js-is-open');
    });

    continueShoppingBtn.bind('click', function(e){
      e.preventDefault();
      cartOverlay.removeClass('js-is-visible');
      cartDrawer.removeClass('js-is-open');
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
  cartDrawerToggle();
  productFilterToggle();

});
