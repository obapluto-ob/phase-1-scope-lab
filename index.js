// 1. Declare a global variable customerName using var and assign it 'bob'.
var customerName = 'bob';

// 2. Function to uppercase the global customerName variable.
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// 3. Function to declare a global bestCustomer and assign it 'not bob'.
function setBestCustomer() {
    bestCustomer = 'not bob'; // No var/let/const means it becomes global.
}

// 4. Function to overwrite the bestCustomer variable.
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

// 5. Declare a constant leastFavoriteCustomer and assign it a value.
const leastFavoriteCustomer = 'someone';

// 6. Function that tries to change leastFavoriteCustomer (will cause an error).
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'someone else'; // This will throw an error because it's a constant.
}

// Test the functions (optional)
console.log(customerName); // 'bob'
upperCaseCustomerName();
console.log(customerName); // 'BOB'

setBestCustomer();
console.log(bestCustomer); // 'not bob'

overwriteBestCustomer();
console.log(bestCustomer); // 'maybe bob'

console.log(leastFavoriteCustomer); // 'someone'
changeLeastFavoriteCustomer(); // This will throw an error

