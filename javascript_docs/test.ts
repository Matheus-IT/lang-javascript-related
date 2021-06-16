const helloWorld = Object.freeze({
	msg: "helloWorld"
});

helloWorld.msg = "hi world!";

console.log(helloWorld.msg);
