export const initForm = () => {

    //отправка формы =======================================================================================
    const forms = document.querySelectorAll('.validate-form');
    forms.forEach(form => {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            let error = formValidate(form);

            if (error === 0) {
                form.classList.add('_sending');
                let formData = new FormData(form);
                let response = await fetch('sendmail.php', {
                    method: 'POST',
                    body: formData
                });

                if (response.ok) {
                    let result = await response.json();
                    alert(result.message);
                    form.reset();
                    form.classList.remove('_sending');
                } else {
                    alert("Ошибка");
                    form.classList.remove('_sending');
                }
            } else {
                alert("Заполните обязательные поля");
            }
        });

        function formValidate(form) {
            let error = 0;
            let formReq = form.querySelectorAll('._req');

            for (let input of formReq) {
                formRemoveError(input);

                if (input.classList.contains('_email')) {
                    if (emailTest2(input)) {
                        formAddError(input);
                        error++;
                    }
                } else {
                    if (input.value === '') {
                        formAddError(input);
                        error++;
                    }
                }
            }
            return error;
        }

        form.querySelectorAll('input').forEach(input => {

            const inputEmail = document.querySelector('#formEmail');
            const inputMessage = document.querySelector('#formMessage');

            input.addEventListener('input', () => {
                if (input.type === 'tel' && input.value.length >= 18) {
                    input.style.border = "2px solid rgb(0, 196, 0)";
                    input.classList.remove('_error');
                } else if (input.type === 'tel' && input.value.length <= 4) {
                    input.style.border = "2px solid transparent";
                    input.classList.remove('_error');
                } else if (input.type === 'tel' && input.value.length > 4 && input.value.length <= 17) {
                    input.style.border = "2px solid red";
                } else if (input.type === 'text' && input.value.length > 2) {
                    input.classList.remove('_error');
                    input.style.border = "2px solid rgb(0, 196, 0)";
                    input.style.boxShadow = "none";
                } else if (input.type === 'text' && input.value.length === 0) {
                    input.classList.remove('_error');
                    input.style.boxShadow = "none";
                    input.style.border = "2px solid transparent";
                }
            });

            inputEmail.addEventListener('input', () => {
                inputEmail.style.border = "2px solid transparent";
                if (emailTest2(inputEmail)) {
                    inputEmail.classList.remove('_error');
                    inputEmail.style.border = "2px solid green";
                }
                if (!emailTest2(inputEmail)) {
                    inputEmail.style.border = "2px solid red";
                }
                if (inputEmail.value.length < 1) {
                    inputEmail.classList.remove('_error');
                    inputEmail.style.boxShadow = "none";
                    inputEmail.style.border = "2px solid transparent";
                }
            });

            inputMessage.addEventListener('input', () => {
                if (inputMessage.value.length >= 2) {
                    inputMessage.classList.remove('_error');
                }
            });
        });
    });



    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }


    // =========================================================================================
    //Функция теста email
    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }

    function emailTest2(input) {
        return /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/.test(input.value);
    }
}