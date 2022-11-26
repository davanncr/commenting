function render(data){
        var html="<div class='panel'><div class='panel-left'><img src='image/user.png'  width=110px></div><div class='panel-right'><span>"+data.name+"</span><p>"+data.date+"</p><p>"+data.comment+"</p></div></div>"
    $('#container').append(html)
}
$(document).ready(function() {
    var comments=[]
    if(!localStorage.comentData){
        localStorage.comentData =[];
    }else{
        comments=JSON.parse(localStorage.comentData);
    }
    for(var i=0;i<comments.length;i++){
        render(comments[i])
    }
    $('#addcmt').click(function(){
        var info={
            'name':$('#name').val(),
            'date':$('#date').val(),
            'comment':$('#comment').val()
        }
        comments.push(info)
        localStorage.comentData=JSON.stringify(comments)
        render(info)
        $('#name').val('')
        $('#date').val('mm/dd/yyyy')
        $('#comment').val('')
    })
})

