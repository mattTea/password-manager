function doWork () {
	throw new Error('Unable to do work!')

/* doesn't matter where the throw new error gets called
as long as calling code is inside of the try block you
will be able to catch it inside the catch block */

}

try {
	//throw new Error;
	doWork();
} catch (e) {
	console.log(e.message); // message property on error object
} finally {
	console.log('finally block executed');
}

console.log('try catch ended');