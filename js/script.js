let PopupBgAuth = document.querySelector('.PopupBgAuth');
let PopupBodyAuth = document.querySelector('.PopupBodyAuth');
let headerWrapperAuthButton = document.querySelector('.headerWrapperAuthBtn')

let PopupBgReg = document.querySelector('.PopupBgReg');
let PopupBodyReg = document.querySelector('.PopupBodyReg');
let headerWrapperRegButton = document.querySelector('.headerWrapperRegBtn')

headerWrapperAuthButton.addEventListener('click',() => {
    PopupBgAuth.classList.add('activeAuth');
    PopupBodyAuth.classList.add('activeAuth');
});

headerWrapperRegButton.addEventListener('click',() => {
    PopupBgReg.classList.add('activeReg');
    PopupBodyReg.classList.add('activeReg');
});

document.addEventListener('click', (e) => {
    if(e.target === PopupBgAuth) {
        PopupBgAuth.classList.remove('activeAuth');
        PopupBodyAuth.classList.remove('activeAuth');
    }
});
document.addEventListener('click', (e) => {
    if(e.target === PopupBgReg) {
        PopupBgReg.classList.remove('activeReg');
        PopupBodyReg.classList.remove('activeReg');
    }
});
                            /* Валидация */
const PopupBodyAuthBtn1 = document.querySelector('.PopupBodyAuthBtn')
const PopupBodyRegBtn1 = document.querySelector('.PopupBodyRegBtn')

PopupBodyAuthBtn1.addEventListener('click', function (e){
    e.preventDefault();
    LoginValidate();
});
PopupBodyRegBtn1.addEventListener('click', function (e){
    e.preventDefault()
    RegistrationValidate();
});

function LoginValidate(){
    let form = new FormData(document.querySelector('.auth'));
    let validate = new Validate();

    if(!validate.EmailValidation(form.get('UserEmail'))) {
        alert(validate.GetLastError());
        return;
    }
    if(!validate.PhoneValidation(form.get('UserPhone'))) {
        alert(validate.GetLastError());
        return;
    }
    if(!validate.PasswordValidation(form.get('UserPassword'))) {
        alert(validate.GetLastError());
        return;
    }

    if(!validate.ComparisonPasswords(form.get('UserPassword'),
        form.get('UserRepeatPassword'))) {
        alert(validate.GetLastError());
        return;
    }
    if(!form.get('RegCheckbox')){
        alert("Примите пользовательское соглашение!");
        return;
    }

    alert("Успешно!");
}
function RegistrationValidate(){
    let form = new FormData(document.querySelector('.registration'));
    let validate = new Validate();

    if(!validate.NameValidation(form.get('UserName'))) {
        alert(validate.GetLastError());
        return;
    }
    if(!validate.EmailValidation(form.get('UserEmail'))) {
        alert(validate.GetLastError());
        return;
    }
    if(!validate.PhoneValidation(form.get('UserPhone'))) {
        alert(validate.GetLastError());
        return;
    }
    if(!validate.PasswordValidation(form.get('UserPassword'))) {
        alert(validate.GetLastError());
        return;
    }
    if(!validate.ComparisonPasswords(form.get('UserPassword'),
        form.get('UserRepeatPassword'))) {
        alert(validate.GetLastError());
        return;
    }
    if(!form.get('RegCheckbox')){
        alert("Примите пользовательское соглашение!");
        return;
    }

    alert("Успешно!");
    return;
}

class Validate{

    NameValidation(name) {
        const re = /^[a-zA-Z\-]+$/;
        let isValide = re.test(name);
        if(!isValide) {
            this.lastError = "Неправильный формат имени!";
        }
        return isValide;
    }

    PhoneValidation(phone) {
        const re = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
        let isValide = re.test(phone);

        if(!isValide){
            this.lastError = "Некорректный номер телефона!";
        }
        return isValide;
    }

    EmailValidation(email){
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        let isValide = re.test(email);
        if(!isValide){
            this.lastError = "Введите корректный адрес электронной почты!";
        }
        return isValide;
    }

    PasswordValidation(password){
        const re = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;
        let isValide = re.test(password);

        if(!isValide) {
            this.lastError = "Слишком простой пароль!";
        }

        return isValide;
    }

    ComparisonPasswords(Password, RepeatPassword){
        let isValide = false;
        if(Password === RepeatPassword){
            isValide = true;
        }
        else {
            this.lastError = "Пароли не совпадают!";
        }
        return isValide;
    }

    GetLastError() {
        return this.lastError;
    }

    _lastError = null;
}
