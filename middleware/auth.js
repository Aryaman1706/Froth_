module.exports =  function(req,res,next) {
    if(!req.user){
        console.log("not logined");
    } else {
        next();
    }
};
