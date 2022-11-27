var db=window.openDatabase('store','1.1.1','store comment',1*1024*1024)
db.transaction(t=>{
    t.executeSql('create table overcomments (name text,date text,comment text)')
})
$('#addcmt').click(function(){
    var info={
        'name':$('#name').val(),
        'date':$('#date').val(),
        'comment':$('#comment').val()
    }
    db.transaction(t=>{
        t.executeSql('insert into overcomments (name,date,comment) values (?,?,?)',[info.name,info.date,info.comment])
    })
    alert("success")
})

