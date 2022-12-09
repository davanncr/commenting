let myform=document.querySelector('form');
myform.addEventListener('submit',(e)=>{
    e.preventDefault();
    let mydataform=new FormData(myform);
    fetch('https://script.google.com/macros/s/AKfycbx8tO48nihcijTTYgnO4XMa2Jy54anWE8vcIHvvG_l_tdYk9-bCHXKYn91ng01HhKhusQ/exec',{method:'POST',body:mydataform})
})