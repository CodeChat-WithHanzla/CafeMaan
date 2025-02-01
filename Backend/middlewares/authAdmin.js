import jwt from "jsonwebtoken";

// admin auth middleware

const authAdmin = async (req, res, next) => {
  try {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
      return res.status(401).json({ message: "Authorization header missing" });
    }
    if (!authorizationHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ message: "Invalid authorization header format" });
    }
    const token = authorizationHeader.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    if (decodedToken !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.status(401).json({ message: "Unauthorized access" });
    }
    next();
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: `${error.message}` });
  }
};
export default authAdmin;
