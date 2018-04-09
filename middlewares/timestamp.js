module.exports = (req,res,next) => {
  req.requestTime = Date.now();
  console.log("timestamp: "+req.requestTime);
  next();
}
