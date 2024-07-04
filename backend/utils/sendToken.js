export const sendToken = (user, statusCode, res) => {
  const token = user.getJwtToken();

  res.status(statusCode).cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000)
  }).json({
    success: true,
    user,
    token
  })
}