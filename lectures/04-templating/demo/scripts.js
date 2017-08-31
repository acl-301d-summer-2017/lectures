var pets = [];

function Pet ( petData ) {
    this.name = petData.name;
    this.type = petData.type;
    this.description = petData.description;
    this.image = petData.image;
}

Pet.prototype.toHtml = function () {
    // TODO use Handlebars to compile our HTML template
    var template = $( '#pet-template' ).html();
    console.log( 'template', template );

    var templateFiller = Handlebars.compile( template );
    console.log( 'templateFiller', templateFiller );

    // var obj = {
    //     name: 'jane',
    //     type: 'fish',
    //     description: 'bubbles are fun',
    //     image: 'https://media.giphy.com/media/mbeBWFPtqdq36/giphy.gif'
    // };

    var filledTemplate = templateFiller( this );
    console.log( 'filledTemplate', filledTemplate );

    $( '#pets' ).append( filledTemplate );

    // return filledTemplate;


    // var $newPet = $( 'article.template' ).clone().removeClass( 'template' );
    // $newPet.find( 'h2' ).text( this.name );
    // $newPet.find( 'p' ).text( this.description );
    // $newPet.find( 'img' ).attr( 'src', this.image );

    // return $newPet;
}

function populatePets () {
   
    // loops through array of pet DATA and creates pet OBJECTS
    petObjects.forEach( pet => {
        pets.push( new Pet( pet ) );
    });
    
    // loops through array of pet OBJECTS and runs .toHTML()
    pets.forEach( pet => {
        pet.toHtml();
        // $( '#pets' ).append( pet.toHtml() );
    });

}

$( document ).ready( function () {
    populatePets();
});