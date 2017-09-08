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
    let album = 'album not found';
    for ( var i = 0; i < this.all.length; i ++ ) {
        if ( this.all[i].id === id ) {
            album = this.all[i];
        }
    }
    
    return album;
}

Album.loadAll = function () {
    for ( var i = 0; i < albumData.length; i ++ ) {
        Album.all.push( new Album( albumData[i] ) );
    }
}

Album.prototype.play = function () {
    return `:music_note_emoji: ${this.lyrics}`;
}

// TODO create a closure to protect Album and albumView
// TODO use a filter method in Album#find (and a arrow function in it!)
// TODO use a forEach function to loadAll