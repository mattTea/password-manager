console.log('starting password manager');

var crypto = require('crypto-js');
var storage = require('node-persist'); // includes 3rd party modules in your files
storage.initSync(); // gets computer ready to start writing and saving variables

var argv = require('yargs')
	.command('create', 'Creates account', function (yargs) {
		yargs.options({
			name: {
				demand: true,
				alias: 'n',
				description: 'Your account name (eg: Facebook, Twitter)',
				type: 'string'
			},
			username: {
				demand: true,
				alias: 'u',
				description: 'Your account username',
				type: 'string'
			},
			password: {
				demand: true,
				alias: 'p',
				description: 'Your account password',
				type: 'string'
			},
			masterPassword: {
				demand: true,
				alias: 'm',
				description: 'Master password',
				type: 'string'
			}
		}).help('help')
	})
	.command('get', 'Gets account detail', function (yargs){
		yargs.options({
			name: {
				demand: true,
				alias: 'n',
				description: 'Your account name',
				type: 'string'
			},
			masterPassword: {
				demand: true,
				alias: 'm',
				description: 'Master password',
				type: 'string'
			}
		}).help('help')
	})
	.help('help')
	.argv;
var command = argv._[0];

console.log(argv);

// account.name Facebook
// account.username User123
// account.password Password123



function getAccounts (masterPassword) {
	// use getItemSync to fetch accounts
	var encryptedAccount = storage.getItemSync('accounts');
	var accounts = []; // by default accounts will be set to an array (have no reason to assume there is an account array created yet)

	// decrypt
	if (typeof encryptedAccount !== 'undefined') { // if not undefined then there is one to decrypt
		var bytes = crypto.AES.decrypt(encryptedAccount, masterPassword);
		accounts = JSON.parse(bytes.toString(crypto.enc.Utf8));
	}
	
	// return accounts array
	return accounts;
}

function saveAccounts (accounts, masterPassword) {
	// encrypt accounts
	var encryptedAccounts = crypto.AES.encrypt(JSON.stringify(accounts), masterPassword);
	
	// use setItemSync to save encrypted accounts (remember, when you encrypt, what you end up with is a string)
	storage.setItemSync('accounts', encryptedAccounts.toString());
	
	// return accounts array
	return accounts;
}


function createAccount (account, masterPassword) {
	var accounts = getAccounts(masterPassword);
	
	accounts.push(account);
	
	saveAccounts(accounts, masterPassword);

	return account;
}

function getAccount(accountName, masterPassword) {
	var accounts = getAccounts(masterPassword);
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


if (command === 'create') {
	var createdAccount = createAccount({
		name: argv.name,
		username: argv.username,
		password: argv.password
	}, argv.masterPassword);
	console.log('Account created!');
	console.log(createdAccount);
} else if (command === 'get') {
	var fetchedAccount = getAccount(argv.name, argv.masterPassword);

	if (typeof fetchedAccount === 'undefined') {
		console.log('Account not found');
	} else {
		console.log('Account found!');
		console.log(fetchedAccount);
	}
}
