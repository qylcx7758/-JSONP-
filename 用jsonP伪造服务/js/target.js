console.log(12)
var msg={};
// var $={};

msg.ob={
    a:"aa",
    b:"zz",
    c:"df"
}
msg.success=function(e){
    return e
}
// $.ajax({
//     url:"xx",
//     success=function(){
        
//     }
// })
$.ajax=function(obj){
    // console.log(obj.url)
    obj.success(msg)
}
// $.ajax(msg)
