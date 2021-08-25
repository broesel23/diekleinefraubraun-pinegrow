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

/*
    Stop / Start carousel autoplay
*/
$('.btn-customized').on('click', function(){
 
    if( ! $(this).hasClass('disabled') ) {
 
        if( $(this).hasClass('btn-pause') ) {
            $('.carousel').carousel('pause');
        }
        else {
            $('.carousel').carousel('cycle');
        }
 
        $('.btn-pause, .btn-cycle').toggleClass('disabled');
        $(this).blur();
 
    }
 
});
