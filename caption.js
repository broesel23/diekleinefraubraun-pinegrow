$(function() {
    $('.carousel').carousel();
    var caption = $('div.item:nth-child(1) .carousel-caption');
    $('#slide-caption h4').html(caption.html());
    caption.css('display','none');
    $(".carousel").on('slide.bs.carousel', function(evt) {
    
    
       var caption = $('div.item:nth-child(' + ($(evt.relatedTarget).index()+1) + ') .carousel-caption');
       $('#slide-caption h4').html(caption.html());
       caption.css('display','none');
    });
});