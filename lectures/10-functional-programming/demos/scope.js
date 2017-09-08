function secretPassword () {
    // scope
    let hidden = 'standing desk';
    // console.log( 'I know the hidden word', hidden === 'standing desk' ); // true

    // closure
    function spillIt () {
        console.log( `don't tell anyone but the secret password is ${hidden}!` );
    }

    return spillIt;
}

const newThing = secretPassword();
newThing();

console.log( hidden );



// const passwordPlease = secretPassword(); // 'don't tell anyone but the secret password is standing desk!';
// passwordPlease();
// hidden === 'standing desk'; // error: hidden is not defined!