let userName ='';

function type(){
userName = prompt('Please Enter Your Name');

document.write(' Welcome ' + userName);
}


function message1(){
    if (userName == 'Connor'){
        document.write('<h3>' + 'ayyy' + '</h3>');
    } else {
        document.write('<h3>' + 'Welcome Guest' + '</h3>');
    }
}


function message2(){
    stringVar = prompt("My site is not finished yet, ok? Type, 'ok' to continue.");
    if (stringVar == 'ok'){
        alert('Welcome');
    } else {
        alert('please exit this site');    
    }
}