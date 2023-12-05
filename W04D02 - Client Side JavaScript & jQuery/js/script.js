
$('#home').on('click', (event) => {
    alert('You clicked the home this time with jQuery!');
});

$('form').on('submit', (event) => {
    event.preventDefault();

    let $fullName = $('#fullName');
    let $email = $('#email');
    let $password = $('#password');
    let $passwordConfirmation = $('#passwordConfirmation');
    let $country = $('#country');
    let $gender = $('.gender:checked');
    let isValid = true;

    if($fullName.val().length < 2){
        $('#fullNameErrorMessage').text('Please type your name.');
        isValid = false;
    }
    else{
        $('#fullNameErrorMessage').text('');
    }

    if($email.val().length < 5){
        $('#emailErrorMessage').show();
        isValid = false;
    }
    else{
        $('#emailErrorMessage').hide();
    }

    if($password.val() !== $passwordConfirmation.val()){
        $('#passwordConfErrorMessage').text('Your passwords do not match!');
        isValid = false;
    }
    else{
        $('#passwordConfErrorMessage').text('');
    }

    if($country.val() === '0'){
        $('#countryErrorMessage').text('Please select a country');
        isValid = false;
    }
    else{
        $('#countryErrorMessage').text('');
    }

    if($gender.val() === undefined){
        $('#genderErrorMessage').text("Please select a gender");
        isValid = false;
    }
    else{
        $('#genderErrorMessage').text('');
    }

    if(isValid){
        $('#formSubmission').html(`
            <div>
                <h2> Name: ${$fullName.val()} </h2>
                <p> Email: ${$email.val()} </p>
                <p> Password: ${$password.val()} </p>
                <p> Country: ${$country.val()} </p>
                <p> Gender: ${$gender.val()} </p>
            </div>
        `)
    }
    else{
        $('#formSubmission').html('<h2> You need to fix the issues first </h2>');
    }
});

/*
let home = document.querySelector('#home');

home.addEventListener('click', (event) => {
    alert('You clicked the home!');
});

let signUpForm = document.querySelector('form');

signUpForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let fullName = document.querySelector('#fullName');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    let passwordConfirmation = document.querySelector('#passwordConfirmation');
    let country = document.querySelector('#country');
    let gender = document.querySelectorAll('.gender');
    let genderSelected = "";

    for(let i = 0; i < gender.length; i++){
        if(gender[i].checked){
            genderSelected = gender[i].value;
        }
    }
    let passwordConfErrorMessage = document.querySelector('#passwordConfErrorMessage');

    if(password.value !== passwordConfirmation.value){
        passwordConfErrorMessage.innerText = "Your passwords do not match!";
    }
    else{
        passwordConfErrorMessage.innerText = "";
    }

    let formSubmission = document.querySelector('#formSubmission');
    formSubmission.innerHTML = `
        <div>
            <h2> Name: ${fullName.value} </h2>
            <p> Email: ${email.value} </p>
            <p> Password: ${password.value} </p>
            <p> Country: ${country.value} </p>
            <p> Gender: ${genderSelected} </p>
        </div>
    `;
});

*/