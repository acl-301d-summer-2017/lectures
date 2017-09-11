const express = require( 'express' );
const app = express();
const PORT = process.env.PORT || 5000;

app.use( express.static('./public') );

app.get( '/', ( req, res ) => {
  res.sendFile( 'index.html', { root: './public' } );
});

// moving these routes to the client side (in routes.js) so that we have a SPA!

app.get( '/cake', ( req, res ) => {
  res.sendFile( 'cake.html', { root: './public' } );
});

app.get( '/ice-cream', ( req, res ) => {
  res.sendFile( 'ice-cream.html', { root: './public' } );
});



app.get( '*', ( req, res ) => {
  res.sendFile( 'index.html', { root: './public' } );
});

app.listen( PORT, () => console.log( `Listening on port ${PORT}` ));