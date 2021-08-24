$("#slider").on('slide.bs.carousel', function(evt) {

    var step = $(evt.relatedTarget).index();

    $('#slider_captions .carousel-caption:not(#caption-'+step+')').fadeOut('fast', function() {
            $('#caption-'+step).fadeIn();
    });
/*
    if ($('#video.carousel-item').hasClass('active')) {
                $("#slider").carousel.slide.data-ride('paused');
        } /* else {
        $("#slider").carousel.slide.data-ride('carousel'); */        
});