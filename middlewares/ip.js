module.exports = (req,res,next) => {
  console.log("request ip: "+req.ip);
  next();
}
