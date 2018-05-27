$(function() {
    // Custom Tabs
    $('.custom-tab').click(function(e) {
        e.preventDefault();
        $('.custom-tab').removeClass('custom-tab--active');
        $(this).addClass('custom-tab--active');

        $('.page__content section').hide();
        $($(this).attr('href')).show();
    });

    // aside
    let drawer = new mdc.drawer.MDCTemporaryDrawer(document.querySelector('.mdc-drawer--temporary'));
    document.querySelector('#menu-icon').addEventListener('click', () => drawer.open = true);
});