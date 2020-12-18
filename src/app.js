$(document).ready(function() {


const source = $("#card-template").html();
const template = Handlebars.compile(source);

    $.ajax({
        url: '../dischi.php',
        method: 'GET',
        success: function(risp) {
            for (var i = 0; i < risp.length; i++) {
                var context = {
                    'poster': risp[i].poster,
                    'title': risp[i].title,
                    'author': risp[i].author,
                    'genre': risp[i].genre,
                    'year': risp[i].year
                 };
                var html = template(context);
                $('.contenitore-card').append(html);
            }
        },
        error: function() {
            console.log('errore');
        }
    });

    // intercetto il cambio di genere nella select
    $('#generi-filtri').change(function() {

        // svuoto il contenuto della pagina
        $('.contenitore-card').empty();

        // recupero il valore del genere selezionato
        var seleziona_genere = $(this).val();

        // faccio una chiamata ajax inviando al server il genere selezionato
        $.ajax({
            url: '../dischi.php',
            method: 'GET',
            data: {
                genre: seleziona_genere
            },
            success: function(risp) {
                for (var i = 0; i < risp.length; i++) {
                    var context = {
                        'poster': risp[i].poster,
                        'title': risp[i].title,
                        'author': risp[i].author,
                        'genre': risp[i].genre,
                        'year': risp[i].year
                     };
                    var html = template(context);
                    $('.contenitore-card').append(html);
                }
            },
            error: function() {
                console.log('errore');
            }
        });

    });

});
