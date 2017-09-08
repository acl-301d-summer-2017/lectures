const albumView = {
    init: function () {
        Album.loadAll();

        Album.all.forEach( function ( album ) {
            $( '#albums' ).append( `<div id="${album.id}"> ${album.name} </div>` );

        });
        
        $( '#albums' ).click( albumView.showLyrics );

    },
    showLyrics: function () {
        const albumId = event.target.id;
        $(`#${albumId}`).append( `<p>${Album.find( albumId ).play()}</p>` );
    }
};

albumView.init();