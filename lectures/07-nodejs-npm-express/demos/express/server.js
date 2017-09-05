'use strict';


console.log( 'I am in the terminal!!!' );

// TODO require and initialize express
/* <script src="express.js"></script> */
const express = require( 'express' );
const app = express();
const PORT = process.env.PORT || '4577';

// Tell app what folder has our files to serve
app.use( express.static( './public' ) );

/*
$('element').on( 'click', function () {}); 
'click' is the event to listen for
*/

// TODO create routes for /cat page
app.get( '/cat', function ( request, response ) {
    console.log( 'request', request );

    console.log( 'response', response );


    const cats = 'CAT';
    console.log( 'I am in the terminal!!!' );
    console.log( cats );
    response.sendFile( 'cats4life.html', { root: './public' });
});

// app.get( '/login', function ( request, response ) {
//     response.sendFile( 'login.html', { root: './public' });
// });

// app.get( '/profile', function ( request, response ) {
//     if ( user.isSarah ) { // do something }
//     response.sendFile( 'profile.html', { root: './public' });
// });

app.listen( PORT, function () {
    console.log( `You are one PORT: ${PORT}` );
});