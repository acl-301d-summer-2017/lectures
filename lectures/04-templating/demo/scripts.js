var pets = [];

function Pet ( petData ) {
    this.name = petData.name;
    this.type = petData.type;
    this.description = petData.description;
    this.image = petData.image;
}

Pet.prototype.toHtml = function () {
    // TODO use Handlebars to compile our HTML template
    var templateFiller = Handlebars.compile( $( '#pet-template' ).html() );  
    var filledTemplate = templateFiller( this );

    return filledTemplate;
}

function populatePets () {
   
    // loops through array of pet DATA and creates pet OBJECTS
    petObjects.forEach( pet => {
        pets.push( new Pet( pet ) );
    });
    
    // loops through array of pet OBJECTS and runs .toHTML()
    pets.forEach( pet => {
        $( '#pets' ).append( pet.toHtml() );
    });

}

$( document ).ready( function () {
    populatePets();
});