const JWT = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const bearerToken = req.headers.authorization;
  console.log(bearerToken);
  if (!bearerToken)
    return res.status(403).json({
      errors: [
        {
          msg: "Unauthorized",
        },
      ],
    });
  const jwt = bearerToken.split("Bearer ")[1];
  if (!jwt)
    return res.status(403).json({
      errors: [
        {
          msg: "Unauthorized",
        },
      ],
    });

  let payload;
  try {
    console.log("REACHED");
    payload = await JWT.verify(jwt, process.env.JSON_WEB_TOKEN_SECRET);
    req.user = payload;
    next();
  } catch (error) {
    console.log(error);
    return res.status(403).json({
      errors: [
        {
          msg: "Unauthorized",
        },
      ],
    });
  }
};
