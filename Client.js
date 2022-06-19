$(document).ready(onReady); // first on ready code
console.log( 'js' ); // confirm javascript is connected

function onReady (){ 
    // click-listener for submit button
    $( '.submitButton' ).on( 'click' , addEmployee ); 
    // click listener targets the "tobdy", because it is on the DOM right away
    // then finds class deleteButton that gets added later
    $('tbody').on('click', '.deleteButton', deleteEmployee );
}

function deleteEmployee (){ // function to when delete is clicked, to remove that row/employee
    console.log( 'delete me' ); //test the functions
    
    // $(this).parent().parent().remove(); // ".parent().parent()" - goes up one parent, then up another parent
    // console.log( $(this).parent().parent().text() ); // console log ALL parent or parents aka WHOLE ROW

    $(this).parents("tr").remove().val();
    // console.log( $(this).parents("tr").val() ); // .parents can take in a specific parent element
    $(this).

    console.log('employeeArray', employeeArray );
}


// global variables
let employeeArray=[];// creates employee array
let sum = 0; // VARIABLE to hold the SUM of the "employeeArray",
            // aka the total of all salaries
let totalMonthly = 0; // VARIABLE to hold the Total Monthly value

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
        firstName:  firstNameValue.val(), 
        lastName:   lastNameValue.val(),
        id:         idValue.val(),
        title:      titleValue.val(),
        annualSalary: annualSalaryValue.val(),
    }
    
// push the value of each employee's salary into the "employeeArray"
employeeArray.push(Number(employeeObject.annualSalary));
    
   //  '.html' - clears and changes html in one code

// Targeted "tbody" ELEMENT, append employee info into a new row via "<tr>"    
$('tbody').append( 
    `<tr>
        <td> ${employeeObject.firstName} </td>
        <td> ${employeeObject.lastName} </td>
        <td> ${employeeObject.id} </td>
        <td> ${employeeObject.title} </td>
        <td> ${employeeObject.annualSalary} </td>
        <td><button class="deleteButton">Delete</button></td>
    </tr>` );
    
    // takes current totalMonthly VARIABLE's value,
    // and adds the new employee's salary data too it
  
    // let array = [1,2,3,4];  //just a test array when creating loop
    sum = 0; //clears the "Sum" Variable. NEEDs to be in da function
//   for ( i=0; i<employeeArray.length; i++ ) { // loops through the array of employees
  for ( i of employeeArray ) { // loops through the array of employees
    sum += i; // takes SUM and adds each index of the "employeeArray"
    totalMonthly = sum/12; // divided the SUM of Total Salaries by 12
}
    // targets totalMonthlyNumber CLASS, changes its value to "totalMonthly" variable's value
totalMonthlyCap = 20000; // setting Total Monthly Cost Cap, easier to read

    if ( totalMonthly > totalMonthlyCap ) {
        console.log( 'whoops! Total Monthly Cost are too high!!' );
        $('.totalMonthlyNumber').addClass('warning');
        $('.totalMonthlyNumber').text(('MONTHLY COST ARE TOO HIGH --> ' + totalMonthly)); // test total monthly input
    } else {

        $('.totalMonthlyNumber').text((totalMonthly)); // test total monthly input
    }



// clears out all of the input fields 
$('#firstName').val('');
$('#lastName').val('');
$('#id').val('');
// $('#title').val(''); // dont want to clear title value
$('#annualSalary').val('');

//making an if else loop to see if total Monthly is over $20,000
// if over $20,000 will change SUM background color to red




// // -- console.logs to test all important variables --
// console.log('employee array:', employeeArray); //works
// console.log('sum:', sum);//works
// console.log('total monthly:', totalMonthly); //works


} // ---- END of main "addEmployee" function ----


