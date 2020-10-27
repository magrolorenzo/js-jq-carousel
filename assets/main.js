$(document).ready(function () {

    // Funzione per click freccia destra
    $('.right-side i').click( function() {

        //  Memorizzo l'immagine corrente
        var current_img = $('img.is-visible');

        // Memorizzo il circle corrente
        var current_circle = $('i.fas.fa-circle');

        // Tolgo all'immagine corrente la classe is-visible
        current_img.removeClass('is-visible');

        // Tolgo al circle corrente la classe fas e aggiungo far
        current_circle.removeClass('fas');
        current_circle.addClass('far');


        if(current_img.next().length){
            // Assegno all'immagine successiva la classe is-visible
            current_img.next().addClass('is-visible');

            // Assegno al circle successivo la classe fas e tolgo far
            current_circle.next().removeClass('far');
            current_circle.next().addClass('fas');

        } else {
            // Se è l'ultima img, assegna is visible alla prima
            $('.slides img:first-child').addClass('is-visible');

            // Se è l'ultima img, assegna is visible alla prima
            $('.circles img:first-child').removeClass('far');
            $('.circles i:first-child').addClass('fas');
        }

    });


    // Funzione per click freccia sinistra
    $('.left-side i').click( function() {

        //  Memorizzo l'immagine corrente
        var current_img = $('img.is-visible');

        // Memorizzo il circle corrente
        var current_circle = $('i.fas.fa-circle');

        // Tolgo all'immagine corrente la classe is-visible
        current_img.removeClass('is-visible');

        // Tolgo al circle corrente la classe fas e aggiungo far
        current_circle.removeClass('fas');
        current_circle.addClass('far');


        if(current_img.prev().length){
            // Assegno all'immagine successiva la classe is-visible
            current_img.prev().addClass('is-visible');

            // Assegno al circle successivo la classe fas e tolgo far
            current_circle.prev().removeClass('far');
            current_circle.prev().addClass('fas');

        } else {
            // Se è l'ultima img, assegna is visible alla prima
            $('.slides img:last-child').addClass('is-visible');

            // Se è l'ultima img, assegna is visible alla prima
            $('.circles img:last-child').removeClass('far');
            $('.circles i:last-child').addClass('fas');
        }

    });

    // Funzione per cliccare i circles
    $('.fa-circle').click( function(){
        // Memorizzo il circle attualmente attivo
        var current_circle = $('i.fas.fa-circle');

        //  Memorizzo l'immagine corrente
        var current_img = $('img.is-visible')

        // E la posizione come figlio rispetto al suo padre contenitore
        var nth = $(this).index() + 1;
        console.log(nth);

        // Riempio il cerchio su cui ho cliccato
        $(this).addClass('fas');
        $(this).removeClass('far');

        // E rendo normale il cerchio precedentemente attivo
        current_circle.removeClass('fas');
        current_circle.addClass('far');

        // Tolgo all'immagine corrente la classe is-visible
        current_img.removeClass('is-visible');

        // Rendo attiva l'immagine legata al cerchio
        $('.slides img:nth-child('+nth+')').addClass('is-visible');
    });

});
