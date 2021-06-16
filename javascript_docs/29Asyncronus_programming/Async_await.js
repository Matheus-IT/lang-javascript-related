"use strict";

function getSomeResult() {
	return 5 + 3;
}

function foo() {
  return new Promise((resolve, reject) => {
    let result = getSomeResult();
    if (result)
      resolve('Success');
    else
      reject('Something went wrong');
  });
}

async function init() {
	try {
		const response = await foo();
		console.log(response);
	} catch (err) {
		console.log(err);
	}
}

init();
 