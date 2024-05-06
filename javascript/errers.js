try{
    var fname=prompt("Enter your name");
    if(fname===""){
        throw'enter connot your empty';

    }
    if(!isNaN(fname)){
        throw'enter your valid';

    }
    document.write(fname);
}catch(errer){
    document.write(errer);
}finally{document.write('<br> bye')}
