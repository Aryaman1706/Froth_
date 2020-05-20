module.exports =  function(req,res,next) {
    if(!req.user){
        console.log("not logined");
        res.send("not logined");
    } else {
        next();
    }
};
