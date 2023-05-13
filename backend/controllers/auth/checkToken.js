require("dotenv").config(); // loading env variables
const jwt = require("jsonwebtoken");

module.exports = function checkToken (request, response, next) {
	// fetch the token from the request header
	const token = request.header("authentication-token");
	if (!token) {
		return response.status(400).send("Access denied!");
	}

  // verify the user
  try {
    const verifiedUser = jwt.verify(token, process.env.SECRET);
    request.user = verifiedUser;
    next();
  } catch (error) {
    response.status(400).send("Invalid token");
  }
};