$(document).ready(function() {
    $(".panel .navigation-button").on("click", function() {
        $(".panel").removeClass("no-animation");
        $(".menu-panel").removeClass("no-animation");
        $(".panel").toggleClass("panel-animated");
        $(".menu-panel").toggleClass("active");
    });

    $(".navigation-search-button").on("click", function() {
        $(".panel .navigation-search").removeClass("no-animation");
        $(".panel .navigation-search").toggleClass("active");
    });
});