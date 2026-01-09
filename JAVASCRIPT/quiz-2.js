function checkAnswer(answer, questionId) {
    var resultElement = document.getElementById(questionId).querySelector('#Q' + questionId.slice(1) + '-result');
    var questionElement = document.getElementById(questionId).querySelector('.question');

    if (questionId === 'Q1') {
        if (answer === 'print(Hello, World!)') {
            resultElement.textContent = 'Correct!';
            questionElement.style.color = 'green';
        } else {
            resultElement.textContent = 'Wrong! The correct answer is print("Hello, World!")';
            questionElement.style.color = 'red';
        }
    }
    if (questionId === 'Q2') {
        if (answer === 'variable_name = value') {
            resultElement.textContent = 'Correct!';
            questionElement.style.color = 'green';
        } else {
            resultElement.textContent = 'Wrong! The correct answer is variable_name = value';
            questionElement.style.color = 'red';
        }
    }
    if (questionId === 'Q3') {
        if (answer === '8') {
            resultElement.textContent = 'Correct!';
            questionElement.style.color = 'green';
        } else {
            resultElement.textContent = 'Wrong! The correct answer is 8';
            questionElement.style.color = 'red';
        }
    }
    if (questionId === 'Q4') {
        if (answer === '#') {
            resultElement.textContent = 'Correct!';
            questionElement.style.color = 'green';
        } else {
            resultElement.textContent = 'Wrong! The correct answer is # This is a comment';
            questionElement.style.color = 'red';
        }
    }
    if (questionId === 'Q5') {
        if (answer === 'ایک لسٹ یا اسٹرنگ کی لمبائی واپس کرتا ہے') {
            resultElement.textContent = 'Correct!';
            questionElement.style.color = 'green';
        } else {
            resultElement.textContent = 'Wrong! The correct answer is ایک لسٹ یا اسٹرنگ کی لمبائی واپس کرتا ہے';
            questionElement.style.color = 'red';
        }
    }
    if (questionId === 'Q6') {
        if (answer === 'a == b') {
            resultElement.textContent = 'Correct!';
            questionElement.style.color = 'green';
        } else {
            resultElement.textContent = 'Wrong! The correct answer is a == b';
            questionElement.style.color = 'red';
        }
    }
    if (questionId === 'Q7') {
        if (answer === 'def myFunction():') {
            resultElement.textContent = 'Correct!';
            questionElement.style.color = 'green';
        } else {
            resultElement.textContent = 'Wrong! The correct answer is def myFunction():';
            questionElement.style.color = 'red';
        }
    }
    if (questionId === 'Q8') {
        if (answer === 'Integer') {
            resultElement.textContent = 'Correct!';
            questionElement.style.color = 'green';
        } else {
            resultElement.textContent = 'Wrong! The correct answer is Integer';
            questionElement.style.color = 'red';
        }
    }
    if (questionId === 'Q9') {
        if (answer === 'اگر شرط غلط ہوتی ہے تو ایک بلاک کو متناسب کرتا ہے') {
            resultElement.textContent = 'Correct!';
            questionElement.style.color = 'green';
        } else {
            resultElement.textContent = 'Wrong! The correct answer is اگر شرط غلط ہوتی ہے تو ایک بلاک کو متناسب کرتا ہے';
            questionElement.style.color = 'red';
        }
    }
    if (questionId === 'Q10') {
        if (answer === 'input()') {
            resultElement.textContent = 'Correct!';
            questionElement.style.color = 'green';
        } else {
            resultElement.textContent = 'Wrong! The correct answer is input()';
            questionElement.style.color = 'red';
        }
    }
}
