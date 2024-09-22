const jwt = require('jsonwebtoken');

// Step 4: Creating and Signing a JWT
function createJWT() {
  const payload = {
    userId: 123,
    username: 'exampleUser',
  };
  const secretKey = 'yourSecretKey'; // Replace with your secret key

  // Sign the JWT with the payload and secret key
  const token = jwt.sign(payload, secretKey);

  console.log('JWT Token:', token);
  return token;
}

// Step 5: Verifying a JWT
function verifyJWT(token) {
  const secretKey = 'yourSecretKey'; // Replace with your secret key

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      console.error('JWT Verification Failed:', err.message);
    } else {
      console.log('JWT Verified. Decoded:', decoded);
    }
  });
}

// Step 6: Decoding a JWT
function decodeJWT(token) {
  const decoded = jwt.decode(token);

  console.log('Decoded JWT:', decoded);
}

// Step 7: Running the Lab
// Create a JWT
const jwtToken = createJWT();

// Verify the JWT
verifyJWT(jwtToken);

// Decode the JWT
decodeJWT(jwtToken);
