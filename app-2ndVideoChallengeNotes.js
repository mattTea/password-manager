console.log('starting password manager');

var storage = require('node-persist'); // includes 3rd party modules in your files
storage.initSync(); // gets computer ready to start writing and saving variables

// account.name Facebook
// account.username User12!
// account.password Password123

function createAccount (account) {
	var accounts = storage.getItemSync('accounts');

	// if accounts is undefined (use typeof), set accounts = [] (empty array)
	if (typeof accounts === 'undefined') {
		accounts = [];
	}

	// now that you know accounts is an array, push on a new account
	accounts.push(account);
	storage.setItemSync('accounts', accounts); // this updates what's stored on the machine

	// return account
	return account;
}

function getAccount(accountName) {
	
	// create var called accounts use getItemSync to load in whatever accounts exist
	var accounts = storage.getItemSync('accounts');
	var matchedAccount;

	// then use loop to iterate over array, return matching account, else undefined
	accounts.forEach(function (account) {  // function gets called for every simgle account
		if (account.name === accountName) {
			matchedAccount = account;
		}
	});

	// return matched account
	return matchedAccount
}

//createAccount({
//	name: 'Facebook',
//	username: 'someemail@gmail.com',
//	password: 'Password123!'
//});

var facebookAccount = getAccount('Facebook');
console.log(facebookAccount);