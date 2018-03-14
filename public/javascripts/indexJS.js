var serverHttp = "http://118.25.50.78:3000/";

function requestServer (){
    $.post(serverHttp,{"a":1,"b":2},function(rs){
        $("body").html(rs.aa);
    });
}

function getContent (){
    //pageIndex要设置变量，这里只为了展示前后端，以及和数据库之间的数据交互
    $.post(serverHttp+"getContent",{"pageIndex":"1"},function(rs){
        if (rs.status){
            //console.log(rs.content);
            $("body").html(rs.content);
        }else {
            $("body").html("查询失败");
        }
    });
}
