module.exports =  function(req,res,next) {
    if(!req.user){
        res.send("not logined");
    } else {
        next();
    }
};
