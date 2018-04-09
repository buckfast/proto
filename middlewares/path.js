module.exports = (req,res,next) => {
  console.log("requested path: "+req.path);
  next();
}
