var menuItems = $('.menu-item');
var menuLinks = $('.menu-link');
var subWarp = $('.sub-wrapper');

menuLinks.on('mouseover focus', function (e) {
    if (e.type === 'mouseover' || e.type === 'focus') {
        menuItems.removeClass('menu-item-act');
        $(this).parent().addClass('menu-item-act');
    }
});

subWarp.mouseleave( function(e) {
    $(this).parent().removeClass('menu-item-act');
})