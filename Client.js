$(document).ready(onReady); // first on ready code
console.log( 'js' ); // confirm javascript is connected

function onReady (){ 
    // click-listener for submit button
    $( '.submitButton' ).on( 'click' , addEmployee ); 
}
// global variable
let totalMonthly = 0; // may change this to an a LOOPable ARRAY later

function addEmployee () { // this will be the main function that does most of the work
    // console.log( 'test submit button function' ); //test submit button function -works
    let firstNameValue = $('#firstName'); // creates variable to save input value -works
    let lastNameValue = $('#lastName');
    let idValue = $('#id');
    let titleValue = $('#title');
    let annualSalaryValue = $('#annualSalary');

    //creates a VARIABLE, that is an OBJECT, to save employee info
    let employeeObject = { 
        //used ".val" because variable CAN'T save jQuery values
        firstName: firstNameValue.val(), 
        lastName: lastNameValue.val(),
        id: idValue.val(),
        title: titleValue.val(),
        annualSalary: annualSalaryValue.val(),
    }
    

// Targeted "tbody" ELEMENT, append employee info into a new row via "<tr>"    
$('tbody').append( 
    `<tr>
        <td> ${employeeObject.firstName} </td>
        <td> ${employeeObject.lastName} </td>
        <td> ${employeeObject.id} </td>
        <td> ${employeeObject.title} </td>
        <td> ${employeeObject.annualSalary} </td>
    </tr>` );
    
    // takes current totalMonthly VARIABLE's value,
    // and adds the new employee's salary data too it
    // totalMonthly =+ employeeObject.annualSalary; 

  
   
   
   
    // targets totalMonthlyNumber id, changes its value to "totalMonthly" variable's value
    $('#totalMonthlyNumber').text(totalMonthly); 
    console.log(totalMonthly);
    // $('#totalMonthlyNumber').val('test');



   






} // ---- END of main "addEmployee" function ----


