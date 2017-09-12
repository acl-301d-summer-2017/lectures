'use strict';

// make an AJAX call to GitHub's API to get some data


$.ajax({
    url: 'https://api.github.com/users/sajoy',
    method: 'GET',
    headers: {
        'Authorization': `token ${monkeys}` 
    }
}).then( data => {
    console.log( 'Data:', data );
});













/* other API's to try
    - https://api.chucknorris.io/
    - https://wiki.scratch.mit.edu/wiki/Scratch_API_(2.0)#GET_.2Fusers.2F.3Cusername.3E
    - http://developer.marvel.com/docs (needs a key!)
*/
