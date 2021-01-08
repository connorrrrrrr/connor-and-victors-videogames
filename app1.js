let userName = '';

function type() {
    userName = prompt('Please Enter Your Name');

    document.write(' Welcome ' + userName);
}


function message1() {
    if (userName == 'Connor') {
        document.write('<h3>' + 'ayyy' + '</h3>');
    } else {
        document.write('<h3>' + 'Welcome Guest' + '</h3>');
    }
}


function message2() {
    stringVar = prompt("My site is not finished yet, ok? Type, 'ok' to continue.");
    if (stringVar == 'ok') {
        alert('Welcome');
    } else {
        alert('please exit this site');
    }
}


function printNumbers() {
    for (let i = 0; i < 10; i++) {
        document.write('<li>' + i + '</li>')
    }
}

let correctAnswer = 7;


function guessingGame() {
    let userAnswer = prompt('Please select a number 1 - 100');
    while (userAnswer < 1 || userAnswer > 100) {
        userAnswer = prompt('Incorrect.  Please select a number 1 - 100');
    }
    let numberOfGuesses = 7
    for (let i = 0; i < numberOfGuesses; i++) {
        if (userAnswer == correctAnswer) {
            alert('Great Job!');
            break;
        } else if (userAnswer < correctAnswer) {
            alert('Too low');
            userAnswer = prompt('Please select a number 1 - 100');
        } else if (userAnswer > correctAnswer) {
            alert('Too high');
            userAnswer = prompt('Please select a number 1 - 100');
        }
    }
}

function message3() {
    stringVar = prompt("How many stars would you rate this site?")
    for (let i = 0; i <userResponse; i++) {
        document.write('<img src=https://cdn.vox-cdn.com/thumbor/6ZwFtXaLm4Q41mQnkSzEtiRJr7o=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21870028/Switch_SuperMario3DAllStars_SM64_screen_10.jpg>');
    }
}