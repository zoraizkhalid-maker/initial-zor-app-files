function login() {
    var firstNameInput = document.getElementById('firstName');
    var lastNameInput = document.getElementById('lastName');

    var firstName = firstNameInput.value;
    var lastName = lastNameInput.value;
    var fullName = firstName + ' ' + lastName;

    localStorage.setItem('userFullName', fullName);
    firstNameInput.value = '';
    lastNameInput.value = '';
}

function getStoredFullName() {
    return localStorage.getItem('userFullName');
}

function displayGreetings(fullName) {
    var greetingsElement = document.getElementById('greetings');
    if (greetingsElement) {
        greetingsElement.innerHTML = 'Hello, ' + fullName + '<br>السلام علیکم, ' + fullName;
    }
}

// Attempt to retrieve stored full name and display greetings
var storedFullName = getStoredFullName();
console.log('Stored Full Name:', storedFullName);
displayGreetings(storedFullName);


function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function redirectTo(url) {
    window.location.href = url;
}