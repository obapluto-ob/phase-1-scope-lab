// 1. Declare a global variable customerName
var customerName = 'bob';

// 2. Function to uppercase customerName
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// 3. Function to declare a global bestCustomer variable
function setBestCustomer() {
    bestCustomer = 'not bob'; // Declared globally (not using var, let, or const)
}

// 4. Function to overwrite bestCustomer
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

// 5. Declare a constant leastFavoriteCustomer
const leastFavoriteCustomer = 'John';

// 6. Function to attempt changing leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'Jane'; // This will throw an error
}
