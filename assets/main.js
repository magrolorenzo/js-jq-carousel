$(document).ready(function () {

    alert('SCRIPT OK');

    $('.right-side i').click( function() {

        //  Memorizzo l'immagine corrente
        var current_img = $('img.is-visible');

        // Tolgo all'immagine corrente la classe is-visible
        current_img.removeClass('is-visible');

        if(current_img.next().length){
            // Assegno all'immagine successiva la classe is-visible
            current_img.next().addClass('is-visible');
        } else {
            $('.slides img:first-child').addClass('is-visible');
        }

    })

});
