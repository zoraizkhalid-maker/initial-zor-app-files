function checkAnswer(answer, questionId) {
    var resultElement = document.getElementById(questionId).querySelector('#' + questionId + '-result');
    var questionElement = document.getElementById(questionId).querySelector('.question');

    if (questionId === 'Q1') {
        if (answer === 'پروگرامرز کو الجھانا') {
            resultElement.textContent = 'Correct!';
            questionElement.style.color = 'green';
        } else {
            resultElement.textContent = 'Wrong! The correct answer is پروگرامرز کو الجھانا';
            questionElement.style.color = 'red';
        }
    }

    if (questionId === 'Q2') {
        if (answer === 'jump()') {
            resultElement.textContent = 'Correct!';
            questionElement.style.color = 'green';
        } else {
            resultElement.textContent = 'Wrong! The correct answer is jump()';
            questionElement.style.color = 'red';
        }
    }

    if (questionId === 'Q3') {
        if (answer === 'ایک علامتی نام کے ساتھ ایک ذخیرہ کرنے کا مقام') {
            resultElement.textContent = 'Correct!';
            questionElement.style.color = 'green';
        } else {
            resultElement.textContent = 'Wrong! The correct answer is ایک علامتی نام کے ساتھ ایک ذخیرہ کرنے کا مقام';
            questionElement.style.color = 'red';
        }
    }

    if (questionId === 'Q4') {
        if (answer === 'باؤنس') {
            resultElement.textContent = 'Correct!';
            questionElement.style.color = 'green';
        } else {
            resultElement.textContent = 'Wrong! The correct answer is باؤنس';
            questionElement.style.color = 'red';
        }
    }

    if (questionId === 'Q5') {
        if (answer === 'ایک اعداد کی فہرست بنانا') {
            resultElement.textContent = 'Correct!';
            questionElement.style.color = 'green';
        } else {
            resultElement.textContent = 'Wrong! The correct answer is ایک اعداد کی فہرست بنانا';
            questionElement.style.color = 'red';
        }
    }

    if (questionId === 'Q6') {
        if (answer === 'ایک شرطی بیان') {
            resultElement.textContent = 'Correct!';
            questionElement.style.color = 'green';
        } else {
            resultElement.textContent = 'Wrong! The correct answer is ایک شرطی بیان';
            questionElement.style.color = 'red';
        }
    }

    if (questionId === 'Q7') {
        if (answer === 'وہ بیانات جو مل کر ایک ساتھ چلتے ہیں') {
            resultElement.textContent = 'Correct!';
            questionElement.style.color = 'green';
        } else {
            resultElement.textContent = 'Wrong! The correct answer is وہ بیانات جو مل کر ایک ساتھ چلتے ہیں';
            questionElement.style.color = 'red';
        }
    }

    if (questionId === 'Q8') {
        if (answer === 'ایک سٹرنگ یا لسٹ کی لمبائی (length) حاصل کرنا') {
            resultElement.textContent = 'Correct!';
            questionElement.style.color = 'green';
        } else {
            resultElement.textContent = 'Wrong! The correct answer is ایک سٹرنگ یا لسٹ کی لمبائی (length) حاصل کرنا';
            questionElement.style.color = 'red';
        }
    }

    if (questionId === 'Q9') {
        if (answer === 'صارف کی ان پٹ لیتا ہے') {
            resultElement.textContent = 'Correct!';
            questionElement.style.color = 'green';
        } else {
            resultElement.textContent = 'Wrong! The correct answer is صارف کی ان پٹ لیتا ہے';
            questionElement.style.color = 'red';
        }
    }

    if (questionId === 'Q10') {
        if (answer === 'if x > 5:') {
            resultElement.textContent = 'Correct!';
            questionElement.style.color = 'green';
        } else {
            resultElement.textContent = 'Wrong! The correct answer is if x > 5:';
            questionElement.style.color = 'red';
        }
    }
}
