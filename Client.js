$(document).ready(onReady); // first on ready code
console.log( 'js' ); // confirm javascript is connected

function onReady (){ 
    // click-listener for submit button
    $( '.submitButton' ).on( 'click' , addEmployee ); 
}

function addEmployee () { // this will be the main function that does most of the work
    // console.log( 'test submit button function' ); //test submit button function -works
    //creates a variable to save employee info
    let employeeObject = { 
        firstName: 'testfirst',
        lastName: 'testlast',
        id: 'testID',
        title: 'testtitle',
        annualSalary: 'testsalary',
    }
console.log( employeeObject, employeeObject.firstName ); //test object - works






} // ---- END of main "addEmployee" function ----


