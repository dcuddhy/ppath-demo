$("document").ready(function() {

    $(window).on("scroll touchmove", function () {
      $('.nav').toggleClass('tiny', $(document).scrollTop() > 0);
    });

});
