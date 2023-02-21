const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || process.env.PORTNO;
const frontURL = process.env.FRONT_URL;
const mongoDB = require("./db");
mongoDB();

app.use((req, res, next) => {
	res.setHeader(
		"Access-Control-Allow-Origin",
		"https://foodmaniafullstack.netlify.app"
	);
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});
app.use(express.json());

app.use("/api", require("./Routes/CreateUser"));
app.use("/api", require("./Routes/DisplayData"));
app.use("/api", require("./Routes/OrderData"));
app.use("/api", require("./Routes/GeoLocation"));

app.get("/", function (req, res) {
	res.send("Hello World");
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
