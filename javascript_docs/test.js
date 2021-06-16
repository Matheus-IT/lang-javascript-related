function divide(n1, n2) {
	return new Promise((resolve, reject) => {
		const time = 3000;
		const future = Date.now() + time;

		while(Date.now() < future) {} // it'll take some time thinking...

		const result = n1 / n2;

		if (result !== Infinity) {
			resolve(result);
		} else {
			reject(result);
		}
	});
}

async function main() {
 	console.log("start");
	
	const result = await divide(5, 2);
	console.log(result);
 
 	console.log("end");
}

console.log("Start Program");
main();
console.log("End program");
