const app = {};
app.password = 'junglee';

console.log( '------------------ app on ln 4 (before IIFE) ----------------------------');
console.log( app );

//  The IIFE module pattern creates local scope within the file, and
// hands data back out to a higher level of scope
(function ( monkeys ) {
    let passwordManager = {};

    passwordManager.spill = function () {
        let password = monkeys.password ? monkeys.password : 'monkeys';
        console.log( `don't tell anyone but the secret password is ${password}!` );
    }

    passwordManager.secure = function ( newPW ) {
        monkeys.password = newPW;
    }

    // by assigning our passwordManager as a property to our module (which is really our app object)
    // we give app access to these functions in a secure way

    monkeys.pm = passwordManager;

}( app ));

app.pm.spill(); // is the spill function nested inside our IIFE
app.pm.secure( 'woooo' );
app.pm.spill();

console.log( '------------------ app on ln 32 (after IIFE) ----------------------------');
console.log( app );
console.log( app.pm.spill );