console.log('starting password manager');

var storage = require('node-persist'); // includes 3rd party modules in your files
storage.initSync(); // gets computer ready to start writing and saving variables

//storage.setItemSync('accounts', [{
//	username: 'Matt',
//	balance: 0
//}]);

// commented out after first run to prove that the variable has been saved and can be called without this running again

var accounts = storage.getItemSync('accounts');


// push on a new account...

//accounts.push({
//	username: 'Katie',
//	balance: 50
//});

// save using setItemSync...

//storage.setItemSync('accounts', accounts); // this sets the accounts variable equal to the accounts array



// comment out code and run getItemSync to prove


console.log(accounts);