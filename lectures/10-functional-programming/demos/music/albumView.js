// (function ( param ) {
//     console.log( 'i was immediately invoked!' + param );
// })( 'hello' );

(function( module ) {
    const albumView = {
        init: function () {
            module.Album.loadAll();
    
            module.Album.all.forEach( function ( album ) {
                $( '#albums' ).append( `<div id="${album.id}"> ${album.name} </div>` );
    
            });
    
            $( '#albums' ).click( albumView.showLyrics );
    
        },
        showLyrics: function () {
            const albumId = event.target.id;
            $(`#${albumId}`).append( `<p>${module.Album.find( albumId ).play()}</p>` );
        }
    };

    // albumView.init();

    module.albumView = albumView;
})( app );

app.albumView.init();




function greetUser () {
    var user = prompt('what is your name?');
    // console.log( 'inside of greetUser', user );

    if ( user === 'louis' ) {
        // var canPet = prompt( 'can I pet you?' );
        let canWalk = prompt( 'can I walk you?' );
        // console.log( 'inside of if ', canPet );
        console.log( 'inside of if ', canWalk );
    }

    // console.log( 'outside of if ', canPet );
    console.log( 'outside of if ', canWalk );
}


// greetUser();
// console.log( 'outside of greetUser', user );