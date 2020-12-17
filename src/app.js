$(document).ready(function() {


const source = $("#card-template").html();
const template = Handlebars.compile(source);

    $.ajax({
        url: 'dischi.php',
        method: 'GET',
        success: function(risp) {
            for (var i = 0; i < risp.length; i++) {
                var context = {
                    'poster': risp[i].poster,
                    'author': risp[i].author,
                    'title': risp[i].title,
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
