import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.json({
      success: false,
      message: "Not Authorized, Login again.",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded?.id) {
      return res.json({
        success: false,
        message: "Not Authorized, Login again.",
      });
    }

    // ✅ attach userId safely
    req.userId = decoded.id;

    next();
  } catch (error) {
    return res.json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};

export default userAuth;
