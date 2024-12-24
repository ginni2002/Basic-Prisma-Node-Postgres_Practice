import jwt from "jsonwebtoken";
import config from "../config/config.js";

function authMiddleware(req, res, next) {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  jwt.verify(token, config.jwt_secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }
    req.userId = decoded.id; //added userId parameter in request object
    next(); // you can pass now to next handler 'security check point'
  });
}

export default authMiddleware;
