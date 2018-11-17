for ( var i = 0; i < iceCreamFlavors.length; i++ ) {
$('body ul').append(
    $('<li class="ice-cream-flavor">').append(
        iceCreamFlavors[i]).append(
            $('</li>')
));
}
