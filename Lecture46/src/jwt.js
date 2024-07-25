const jwt = require("jsonwebtoken");

const CS_SECRET_KEY = "CSSecretKey";

const generateToken = (payload) => {
  const token = jwt.sign(payload, CS_SECRET_KEY);
  return token;
};

const verifyToken = (token) => {
  try {
    const payload = jwt.verify(token, CS_SECRET_KEY);
    return { isValidToken: true, payload };
  } catch (err) {
    console.log(err);
    return { isValidToken: false, payload: undefined };
  }
};

module.exports = {generateToken, verifyToken};

// console.log(generateToken({name: "debasis"}));
// console.log(
//   verifyToken(
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZGViYXNpcyIsImlhdCI6MTcyMTkwMTU2Nn0.IdrSHxKPn1_QckF32RsAvuZA6qDjdyQ9u25lUIbXpOo"
//   )
// );