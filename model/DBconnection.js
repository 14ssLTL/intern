var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'admin',
    database : 'intership_db'
});

connection.connect();

exports.getContentByID = function(id,rs){
    connection.query('SELECT content from test_table where id='+parseInt(id), function (err, rows, fields) {
        if (err){
            console.log("error："+err);
            rs({status:false});
        }
        else{
            console.log('The DB has been connected!');
            var value =JSON.parse(JSON.stringify(rows))[0].content;
            rs({status:true,content:value});
        }
    });
}
