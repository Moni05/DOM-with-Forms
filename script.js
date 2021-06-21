//getting the form using DOM.
const myForm = document.querySelector('#food-form');
const containerDiv = document.querySelector('.container-fluid');


//creating a div for table.
const tableDiv = document.createElement('div');
tableDiv.setAttribute('class','table-responsive');
containerDiv.appendChild(tableDiv);

//creating a table and setting a class
const tables = document.createElement('table');
tables.setAttribute('class','table table-striped table-borderless');

//appending a table to a div.
tableDiv.appendChild(tables);

//getting form values after submit.
myForm.addEventListener('submit', (e) => {

    //to prevent default action of the browser.
    e.preventDefault();

    //Assigning each  form field values to a variable.
    const firstName = document.querySelector('#firstname').value;
    const lastName = document.querySelector('#lastname').value;
    const Address = document.querySelector('#address').value;
    const pinCode = document.querySelector('#pincode').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const foodChoice = document.querySelector('#choice-of-food').selectedOptions;
    var values = Array.from(foodChoice).map(({ value }) => value);
    const state = document.querySelector('#state').value;
    const country = document.querySelector('#country').value;

    // creating a row for a table and appending it to table.
    const rows = document.createElement('tr');
    tables.appendChild(rows);

    //creating column for each retrieved form field values and asigning them a values.
    const colFname = document.createElement('td');
    colFname.innerText = firstName;

    const colLastName = document.createElement('td');
    colLastName.innerText = lastName;

    const colAddress = document.createElement('td');
    colAddress.innerText = Address;

    const colPincode = document.createElement('td');
    colPincode.innerText = pinCode;

    const colGender = document.createElement('td');
    colGender.innerText = gender;

    const colFood = document.createElement('td');
    colFood.innerText = values;

    const colState = document.createElement('td');
    colState.innerText = state;

    const colCountry = document.createElement('td');
    colCountry.innerText = country;

    //appending all colums to a row.
    rows.append(colFname,colLastName,colAddress,colPincode,colGender,colFood,colState,colCountry);

    // resetting the form after submission.
    myForm.reset();
})