var argv = require('yargs') // store all the arguments passed into our program
	.command('hello', 'Greets the user', function (yargs) { // takes 3 arguments (what you want user to type, description of command, function)
		yargs.options({
			name: {
				demand: true,
				alias: 'n',
				description: 'Your first name goes here',
				type: 'string'
			},
			lastname: {
				demand: true,
				alias: 'l',
				description: 'Your last name goes here',
				type: 'string'
			}
		}).help('help')
	})
	.help('help')
	.argv;
var command = argv._[0];

console.log(argv);
// argv object shown in cmd shows '_'
// this underscore key has a value of 'array', and this array stores all the commands passed in


if (command === 'hello' && typeof argv.name !== 'undefined' && typeof argv.lastname !== 'undefined') {
	console.log('Hello ' + argv.name + ' ' + argv.lastname + '!');
} else if (command === 'hello' && typeof argv.name !== 'undefined') {
	console.log('Hello ' + argv.name + '!');
} else if (command === 'hello') {
	console.log('Hello world!');
}


// above is allowing the user to enter commands directly into the cmd to run from your program



// update program to take a lastName argument
// if they don't provide a lastName just return first
// if they don't provide a firstName stick with default message

