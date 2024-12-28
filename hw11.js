// Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'єкту метод "deposit", 
// який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку. Методи повинні зпрацьовувати при натисканні на кнопки “поповнити рахунок” та отримати ‘готівку’ відповідно. 
// Після проведення операції виводити повідомлення про залишок на рахунку.

// const bankAccount = {
//     ownerName: "aleksandra",
//     accountNumber: 36532,
//     balance: 5000000,
//     deposit: function (amount) {
//         this.balance += amount;
//         const message = `В акаунті ${this.ownerName} . Депозит ${amount} . Баланс: ${this.balance}`;
//         console.log(message);
//     },
//     withdraw: function (amount) {
//         if (amount > this.balance) {
//             console.log("Не достатньо грошей ");
//         } else {
//             this.balance -= amount;
//             const message = `Зняття ${amount} з акаунту ${this.ownerName}. Баланс: ${this.balance}`;
//             console.log(message)
//         }
//     }
// }

// Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed".
// Додайте до об'єкту метод, який повертає "true", якщо температура нижче 0 градусів Цельсія, та "false",
// якщо температура вище або рівна 0 градусів Цельсія. Температуру потрібно отримати з інпуту на сторінці.
// Якщо метод повернув "true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки


// const weather = {
//     temperature: 0,
//     humidity: 0,
//     windSpeed: 0,
//     SearchTemperaturesBelowZero: function () {
//         return this.temperature < 0;
//     },

//     chekTemperatures: function () {
//         if (this.SearchTemperaturesBelowZero()) {
//             console.log("Температура нижча за 0 градусів")
//         } else {
//             console.log("Температура вища за 0 градусів")
//         }
//     }
// }
// weather.temperature = -7;
// weather.chekTemperatures();

// weather.temperature = 2;
// weather.chekTemperatures()

// Створіть об’єкт "user", якbq буде мати властивості "name", "email", "password".
// Додайте метод "login", який буде перевіряти правильність введеного email та password. 
// Використайте інпути для запису значень властивостей в об’єкт

// const user ={
//     name: "",
//     email: "",
//     password: "",
//   login: function (yourEmail, yourPassword) {
//         if (yourEmail === this.email && yourPassword === this.password) {
//             console.log("Ви увійшли в акаунт");
//         } else {
//             console.log("Нажаль ви не увійшли в акаунт");
//         }

//     }
// }
// user.name = "Dina";
// user.email = "mazurdr00@gmail.com";
// user.password = "12789090";