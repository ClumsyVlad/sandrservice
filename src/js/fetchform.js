document.addEventListener('DOMContentLoaded', () => {

    const ajaxSend = (formData) => {
        fetch('http://localhost:9999/fetchphp.php', { // файл-обработчик 
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded', // отправляемые данные 
            },
            body: formData
        })
            .then(response => console.log('Сообщение отправлено методом fetch'))
            .catch(error => console.error(error))
    };

    const forms = document.getElementsByTagName('form');
    for (let i = 0; i < forms.length; i++) {
        forms[i].addEventListener('submit', function (e) {
            e.preventDefault();
            const formData = new FormData(this);
            ajaxSend(formData);
            this.reset(); // очищаем поля формы 
        });
    };

});