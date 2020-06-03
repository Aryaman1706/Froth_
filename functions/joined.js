function joined ( group, user ){
    const len = user.groups.length;
    var i;
    for(i=0; i<len; i++){
        if( user.groups[i].equals(group._id) ){
            return true
        };
    }
    if(i === len){
        return false
    };
}

module.exports = joined;