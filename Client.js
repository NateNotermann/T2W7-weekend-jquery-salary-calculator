$(document).ready(onReady); // first on ready code
console.log( 'js' ); // confirm javascript is connected

function onReady (){ 

    $( '.submitButton' ).on( 'click' , addEmployee ); // click-listener for submit button
}

function addEmployee () {
    console.log( 'test submit button function' ); //test submit button function -works

}