$("#slider").on('slide.bs.carousel', function(evt) {

    var step = $(evt.relatedTarget).index();

    $('#slider_captions .carousel-caption:not(#caption-'+step+')').fadeOut('fast', function() {
            $('#caption-'+step).fadeIn();
    });

	/* HIER MUSS AUCH DER Zustand von '.btn-customized' passend gesetzt werden. Falls der Button auf btn-pause war, muss passend getoggled werden... Leichte Ungenauigkeit bzgl. Farbe des Pause-Buttons resultiert durch aktives Setzen von Fokus. Ist aber bzgl. des Zustands wenigstens nun konsistent. Damit wird wirklich beim Klicken von Pause angehalten und beim Klicken eines der Pfeil-Buttons werden die Play/Pause-Button Zustände korrekt gesetzt bis auf die zu intensive Farbe des Pause-Buttons - kann man verschmerzen */
	
  	set_pause_play_buttons();
	      
});

/*
    Set status of Play/Pause buttons according to cycle or pause of carousel
*/

function set_pause_play_buttons(){

    $('.btn-cycle').toggleClass('disabled',true);
	$('.btn-cycle').blur();
	$('.btn-pause').toggleClass('disabled',false);
    $('.btn-pause').focus();
}

/*
    Stop / Start carousel autoplay
*/

$('.btn-customized').on('click', function(){
 
    if( ! $(this).hasClass('disabled') ) {
 
        if( $(this).hasClass('btn-pause') ) {
            $('#slider').carousel('pause'); 
        }
        else {
            $('#slider').carousel('cycle');
        }
 
        $('.btn-pause, .btn-cycle').toggleClass('disabled');
        $(this).blur();
 
    } 
}
 
);
