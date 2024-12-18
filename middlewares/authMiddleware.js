const { verifyToken } = require("../config/jwt");

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  try {
    const decoded = verifyToken(token);
    req.user = { id: decoded.id };
    next();
  } catch {
    res.status(403).json({ error: "Invalid token" });
  }
};

module.exports = authMiddleware;
