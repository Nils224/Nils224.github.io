const lowChar ='abcdefghijklmnopqrstuvwxyz';
const uppChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const num = '0123456789';
const symb = '!#%&()*+,-.$/:;<=>?@[\]^{|}~';


let lowerCaseInput = document.querySelector('.lowercase');
let upperCaseInput = document.querySelector('.uppercase');
let numBoxInput = document.querySelector('.number');
let symBoxInput = document.querySelector('.special');
let generate = document.querySelector('.generate');
let myPass = document.querySelector('.password');
let copyBtn = document.querySelector('.copy');

copyBtn.disabled = true;

generate.addEventListener('click',function(event){
    pwd = '';
    pwdChar = '';

    passLength = prompt("Please choose the length of your password. Must be between 8 and 128");
    if(passLength >= 8 && passLength <= 128){
    } else {
        alert("Password length must be between 8 and 128")
        return;
    };

    if (lowerCaseInput.checked) {
        pwdChar = pwdChar+lowChar;

    } if (upperCaseInput.checked) {
        pwdChar = pwdChar+uppChar;

    } if (numBoxInput.checked) {
        pwdChar = pwdChar+num;

    } if (symBoxInput.checked) {
        pwdChar = pwdChar+symb;
    };

    for(i=0; i<passLength; i++) {
        pwd = pwd + pwdChar.charAt(Math.floor(Math.random() * pwdChar.length));
    };

    if (pwd == '') {
        alert("Please select your character types")
    } else {
        myPass.innerHTML = pwd;
        copyBtn.setAttribute('class','copy');
        copyBtn.disabled = false;
    };
    // console.log(pwd)
})

copyBtn.addEventListener('click', function(event){
    myPass.select();
    document.execCommand('copy');
    alert("Password copied to clipboard");
})


