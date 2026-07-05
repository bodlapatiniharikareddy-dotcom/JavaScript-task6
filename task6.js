// 1. Employee Login (Scope)
function employeeLogin() {
    if (true) {
        var companyName = "Stackly IT";
        let employeeId = 101;
        const password = "admin123";

        console.log(companyName);
        console.log(employeeId);
        console.log(password);
    }

    console.log(companyName); 

}

employeeLogin();

// 2. ATM Machine (Hoisting)

console.log(accountBalance); 
var accountBalance = 5000;

let amount = 3000;

const pin = 1234;

// 3. Food Delivery App (Named Function)

function orderFood(foodName) {
    console.log("Order Placed : " + foodName);
}

orderFood("Chicken Biryani");

// 4. WhatsApp Status (Anonymous Function)

let updateStatus = function(status) {
    console.log("Status Updated : " + status);
};

updateStatus("Busy in Meeting");

// 5. Weather App (Arrow Function)

let weather = (city, temperature) => {
    console.log(city + " Temperature is " + temperature + "°C");
};

weather("Chennai", 36);

// 6. Flipkart Offer (IIFE)

(function() {
    console.log("Today's Offer");
    console.log("Flat 60% Discount");
})();

// 7. Online Payment (Higher Order + Callback)

function paymentSuccess() {
    console.log("Payment Successful");
}

function makePayment(callback) {
    console.log("Payment Processing...");
    callback();
}

makePayment(paymentSuccess);

// 8. YouTube Playlist (Generator Function)

function* playlist() {
    yield "Video 1";
    yield "Video 2";
    yield "Video 3";
    yield "Video 4";
}

let videos = playlist();

console.log(videos.next().value);
console.log(videos.next().value);
console.log(videos.next().value);
console.log(videos.next().value);

let result = videos.next();

if (result.done) {
    console.log("Playlist Completed");
}

// 9. Student Result (Return)

function calculateTotal() {
    return 485;
}

let totalMarks = calculateTotal();

console.log("Total Marks : " + totalMarks);

// 10. Shopping Cart (Return)

function cartTotal(price1, price2, price3) {
    return price1 + price2 + price3;
}

let totalAmount = cartTotal(500, 1000, 1500);

console.log("Total Amount : " + totalAmount);

// 11. Salary Calculator (Uncurrying)

function salary(basic, hra, bonus) {
    let totalSalary = basic + hra + bonus;
    console.log("Total Salary : " + totalSalary);
}

salary(40000, 10000, 8000);

// 12. Food Bill (Currying)

function foodBill(food) {
    return function(drinks) {
        return function(dessert) {
            return food + drinks + dessert;
        };
    };
}

console.log(foodBill(200)(100)(80));

// 13. E-commerce Coupon Generator

function* couponGenerator() {
    yield "WELCOME10";
    yield "SAVE20";
    yield "SUPER30";
    yield "MEGA50";
}

let coupons = couponGenerator();

console.log(coupons.next().value);
console.log(coupons.next().value);
console.log(coupons.next().value);
console.log(coupons.next().value);

let couponResult = coupons.next();

if (couponResult.done) {
    console.log("No More Coupons");
}

// 14. Bank Transaction (Higher Order + Callback)

function transactionSuccess() {
    console.log("Transaction Successful");
}

function withdraw(callback) {
    console.log("Processing...");
    callback();
}

withdraw(transactionSuccess);

// 15. Employee Profile (Scope)

function employeeProfile() {
    if (true) {
        var company = "Stackly";
        let designation = "MERN Developer";
        const salary = 50000;
    }

    console.log(company);
}

employeeProfile();

