//let tg = window.Telegram.WebApp;
///*tg.init();*/

//function tgShowAlert(message) {
//    tg.showAlert(message);
//}

//function initDataUnsafe() {
//    let result = 'init';

//    try {
//        result = JSON.stringify(tg.initDataUnsafe);
//    } catch (e) {
//        result = e.message;
//    }

//    return result;
//}

//function tgMainButtonShow() {
//    tg.MainButton.show();
//}

//function tgMainButtonHide() {
//    tg.MainButton.hide();
//}

//function tgClose() {
//    tg.close();
//}

window.TelegramWebApp = {
    init: function () {
        if (window.Telegram && window.Telegram.WebApp) {
            window.Telegram.WebApp.ready();
        }
    },

    getInitDataUnsafe: function () {
        this.init();

        if (window.Telegram && window.Telegram.WebApp) {
            const initData = window.Telegram.WebApp.initDataUnsafe;
            return JSON.stringify(initData); // Преобразуем объект в строку JSON
        } else {
            console.error("Telegram WebApp is not initialized.");
            return "Telegram WebApp is not initialized.";
        }
    },

    getInitData: function () {
        this.init();

        if (window.Telegram && window.Telegram.WebApp) {
            const initData = window.Telegram.WebApp.initData;
            return initData;
        } else {
            console.error("Telegram WebApp is not initialized.");
            return "Telegram WebApp is not initialized.";
        }
    },

    getUserId: function () {
        this.init();

        if (window.Telegram && window.Telegram.WebApp) {
            const user = window.Telegram.WebApp.initDataUnsafe.user;
            if (user && user.id) {
                return user.id.toString(); // Возвращаем только id пользователя
            } else {
                console.error("User data is not available.");
                return "User data is not available.";
            }
        } else {
            console.error("Telegram WebApp is not initialized.");
            return "Telegram WebApp is not initialized.";
        }
    },

    setHeaderColor: function (color) {
        if (window.Telegram && window.Telegram.WebApp) {
            window.Telegram.WebApp.setHeaderColor(color);
        }
    },

    close: function () {
        if (window.Telegram && window.Telegram.WebApp) {
            window.Telegram.WebApp.close();
        }
    },

    mainButtonShow: function () {
        if (window.Telegram && window.Telegram.WebApp) {
            window.Telegram.WebApp.MainButton.show();
        }
    },

    mainButtonHide: function () {
        if (window.Telegram && window.Telegram.WebApp) {
            window.Telegram.WebApp.MainButton.hide();
        }
    },

    showAlert: function () {
        if (window.Telegram && window.Telegram.WebApp) {
            window.Telegram.WebApp.showAlert('Testing');
        }
    }
};