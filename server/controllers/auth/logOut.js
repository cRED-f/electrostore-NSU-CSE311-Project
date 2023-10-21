export const logOut = async (req, res, next) => {
  try {
    res
      .status(200)
      .cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
        sameSite: "none",
        secure: true,
      })
      .json({
        success: true,
        message: "Logged out successfully",
      });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
