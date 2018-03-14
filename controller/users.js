var UserModel = require('../model/DBconnection');
exports.getContent = function(req, res) {
    console.log(req.body);
    var pageIndex = req.body.pageIndex;
    UserModel.getContentByID(pageIndex,function(rs){
        console.log('rs:',rs);
        res.send(rs);
    });
};
