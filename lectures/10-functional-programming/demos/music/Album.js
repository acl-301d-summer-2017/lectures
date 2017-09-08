let app = {};

(function( module ) {

    const albumData = [
        { name: 'Album a', artist: 'B', genre: 'rock', lyrics: 'Sittin criss crossed apple sauce', numOfSongs: 5  },
        { name: 'The Blue One', artist: 'B', genre: 'light rock', lyrics: 'Sittin in a comfy blue chair', numOfSongs: 18  },
        { name: 'The Gray One', artist: 'Harold', genre: 'folk', lyrics: 'Chillin around the campfire', numOfSongs: 12  },
        { name: 'MOVE', artist: 'Chelsea Chelsea', genre: 'pop', lyrics: 'stop sitting around', numOfSongs: 11  },
    ];

    function Album ( data ) {
        this.name = data.name;
        this.id = data.name.replace( / /g, '-' );
        this.artist = data.artist;
        this.genre = data.genre;
        this.lyrics = data.lyrics;
        this.numOfSongs = data.numOfSongs;
    }

    Album.all = [];

    Album.find = function ( id ) {
        // let album = 'album not found';
        // for ( var i = 0; i < this.all.length; i ++ ) {
        //     if ( this.all[i].id === id ) {
        //         album = this.all[i];
        //     }
        // }
        
        // return album;
        return this.all.filter( function ( album ) {
            // if ( album.id === id ) 
            return album.id === id;
            // return true if we want to keep this item!
        });
    }

    Album.findByArtist = function ( artistName ) {
        // return this.all.filter( function ( album ) {
        //     return artistName === album.artist;
        // });

        return this.all.filter( album => artistName === album.artist );
        // return this.all.filter( album => { return artistName === album.artist });
    }

    Album.allArtists = function () {
        
        // const allArtists = [];
        // for ( var i = 0; i < this.all.length; i ++ ) {
        //     allArtists.push( this.all[i].artist );
        // }

        // return allArtists;

        return this.all.map( function ( album ) { // return for allArtists
            return album.artist; // return for map callback
        }).reduce( function ( accumulator, artist ) { // ['b','b','chelsea'];
          
            if ( !accumulator.includes( artist ) ) {
                accumulator.push( artist );
            }

            return accumulator;
        }, [] );

        return this.all.map( album => album.artist )
                        .reduce( (accumulator, artist) => {
                            if ( !accumulator.includes( artist ) ) {
                                accumulator.push( artist );
                            }                
                            return accumulator;
                        }, [] );

        // ['b', 'chelsea'];
        

    }

    Album.loadAll = function () {
        // for ( var i = 0; i < albumData.length; i ++ ) {
        //     Album.all.push( new Album( albumData[i] ) );
        // }

        // albumData.forEach(function ( albumObj ) {
        //     console.log( albumObj );
        //     Album.all.push( new Album( albumObj ) );
        // });

        Album.all = albumData.map( function (albumObj) {
            // console.log( albumObj );
            return new Album( albumObj );
        });

        // console.log( Album.all );
    }

    Album.prototype.play = function () {
        return `:music_note_emoji: ${this.lyrics}`;
    }

    module.Album = Album;

})( app );

// TODO create a closure to protect Album and albumView
// TODO use a filter method in Album#find 
// TODO use a map and a reduce to make Album#allArtists return an array of artists names
// TODO use a forEach function to loadAll
// TODO use arrow functions in our higher order functions
// TODO try using an arrow function for our Album methods (will this work?)