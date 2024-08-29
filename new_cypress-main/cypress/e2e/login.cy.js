describe('Проверка авторизации', function () {

// Напиши проверку на позитивный кейс авторизации:
// а) Ввести правильный логин
// б) Ввести правильный пароль
// в) Нажать войти
// г) Проверить нужный текст и наличие кнопки крестик

    it('Позитивный кейс авторизации, правильный логин и правильный пароль', function () {
         cy.visit('https://login.qa.studio/'); // зашли на сайт
         cy.get('#mail') .type('german@dolnikov.ru'); // ввели верный логин
         cy.get('#pass') .type('iLoveqastudio1'); // ввели верный пароль
         cy.get('#loginButton') .click(); // нажал войти
         cy.get('#messageHeader') .contains('Авторизация прошла успешно'); // сообщение
         cy.get('#messageHeader') .should('be.visible'); // видим сообщение
         cy.get('#exitMessageButton > .exitIcon') .should('be.visible'); // ищем крестик
     })

// Напиши автотест на проверку логики восстановления пароля:
// а) Нажать «Забыли пароль»
// б) Ввести любой имейл
// в) Проверка, что получили нужный текст и есть кнопка крестика

    it('проверку логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#forgotEmailButton').click(); // жмем забыли пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); // вводим почту
        cy.get('#restoreEmailButton').click(); // жмем отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // сообщение
        cy.get('#messageHeader') .should('be.visible'); // видим сообщение
        cy.get('#exitMessageButton > .exitIcon') .should('be.visible'); // ищем крестик
     })

// Напиши проверку на негативный кейс авторизации:
// а) Ввести правильный логин
// б) Ввести НЕправильный пароль
// в) Нажать войти
// г) Проверить нужный текст и наличие кнопки крестик
 
     it('Негативный кейс авторизации, правильный логин и неправильный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // вводим правильную почту
        cy.get('#pass').type('gd647g3AAcnn'); // вводим неправильный пароль
        cy.get('#loginButton').click(); // кликаем на кнопку войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // получаем сообщение
        cy.get('#messageHeader').should('be.visible'); // подтверждаем видимость сообщения
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяем наличие крестика
       
     })

// Напиши проверку на негативный кейс авторизации:
// а) Ввести НЕправильный логин
// б) Ввести правильный пароль
// в) Нажать войти
// г) Проверить нужный текст и наличие кнопки крестик

     it('Негативный кейс авторизации, неверный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#mail').type('nevernaya@pochta.com'); // вводим неправильную почту
        cy.get('#pass').type('iLoveqastudio1'); // вводим правильный пароль
        cy.get('#loginButton').click(); // кликаем на кнопку войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // получаем сообщение
        cy.get('#messageHeader').should('be.visible'); // подтверждаем видимость сообщения
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяем наличие крестика
   
    })

// Напиши проверку на негативный кейс валидации:
// а) Ввести логин без @
// б) Ввести правильный пароль
// в) Нажать войти
// г) Проверить, что получаем текст с ошибкой

     it('негативный кейс валидации, логин без @ и правильный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#mail').type('germandolnikov.ru'); // вводим почту без @
        cy.get('#pass').type('iLoveqastudio1'); // вводим правильный пароль
        cy.get('#loginButton').click(); // кликаем на кнопку войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // получаем сообщение
        cy.get('#messageHeader').should('be.visible'); // подтверждаем видимость сообщения
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяем наличие крестика
    })
// Напиши проверку на приведение к строчным буквам в логине:
// а) Ввести логин GerMan@Dolnikov.ru
// б) Ввести правильный пароль
// в) Нажать войти
// г) Проверить, что авторизация успешна (нужный текст и наличие кнопки крестик)
// Разработчик допустил баг и это не реализовал. Тест должен упасть — и это ок (то есть мы поймали баг, который допустил разработчик)

    it('проверку на приведение к строчным буквам в логине', function () {
       cy.visit('https://login.qa.studio/'); // зашли на сайт
       cy.get('#mail') .type('GerMan@Dolnikov.ru'); // ввели GerMan@Dolnikov.ru
       cy.get('#pass') .type('iLoveqastudio1'); // ввели верный пароль
       cy.get('#loginButton') .click(); // нажал войти
       cy.get('#messageHeader') .contains('Авторизация прошла успешно'); // сообщение
       cy.get('#messageHeader') .should('be.visible'); // видим сообщение
       cy.get('#exitMessageButton > .exitIcon') .should('be.visible'); // ищем крестик
})
 })

 
 // Запуск Cypress: npx cypress open
 // запуск через теринал: npx cypress run --spec cypress/e2e/poke.cy.js --browser chrome
 