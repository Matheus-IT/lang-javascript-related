const Express = require("express");
const path = require("path");

const app = Express();

app.use(Express.json());

app.use(Express.urlencoded({ extended: false }));

app.put("/post/:id", (request, response) => {
	// do some database stuff

	response.json({
		id: request.params.id,
		title: request.body.title
	});
});

app.listen(5000, () => console.log("Server started on 5000"));
