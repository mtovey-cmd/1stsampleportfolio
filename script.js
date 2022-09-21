//selecting html elements
let emailElement = document.querySelector('#email');

let messageElement = document.querySelector('#message');

let submitButton = document.querySelector('#submit-button');

//attaching 'click listener'
submitButton.addEventListener('click', function(e){
    e.preventDefault();
    //getting user entered values
    let emailValue = emailElement.value;
    let messageValue = messageElement.value;


    console.log('Email: ', emailValue);
    console.log('Message: ', messageValue);

    if(emailValue.includes('@')) {
        alert('Thank you for your message!')
    } else{
        alert('Whoops! That doesn\'t look like a valid email.')
    }
})


//javascript validations