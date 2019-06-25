module.exports = function (req, res, next) {
  console.log(`Process ${req.method} ${req.url}...`);
  next();
}
