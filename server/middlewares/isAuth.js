import jwt from "jsonwebtoken";

export const isAuthenticated = (req, res, next) => {
  // Get the token from the request headers or cookies, depending on your setup
  const token = req.headers.authorization || req.cookies.token;

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "You need to log in first",
    });
  }

  try {
    // Verify the token using your JWT secret key
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    // Attach the decoded token to the request for later use
    req.user = decodedToken;

    // Continue to the next middleware or route handler
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
};
