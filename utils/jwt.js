const jwt = require('jsonwebtoken');

getJsonWebToken = function(userId) {
    const token = jwt.sign(
      { id: userId},
      process.env.JWT_ACCESS_SECRET,
      {
        expiresIn: '8h',
      }
    );
  
    return token;
  };

// function generateAccessToken(user) {
//   return jwt.sign({ userId: user.id }, process.env.JWT_ACCESS_SECRET, {
//     expiresIn: '5m',
//   });
// }

// function generateRefreshToken(user, jti) {
//   return jwt.sign({
//     userId: user.id,
//     jti
//   }, process.env.JWT_REFRESH_SECRET, {
//     expiresIn: '8h',
//   });
// }

// function generateTokens(user, jti) {
//   const accessToken = generateAccessToken(user);
//   const refreshToken = generateRefreshToken(user, jti);

//   return {
//     accessToken,
//     refreshToken,
//   };
// }

module.exports = {
    getJsonWebToken,
//   generateAccessToken,
//   generateRefreshToken,
//   generateTokens
};