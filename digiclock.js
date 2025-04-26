function gct(){
    let a=new Date();
    let b=a.getHours();
    let c=a.getMinutes();
    let d=a.getSeconds();
 //document.write(b);
    document.getElementById("clock").innerHTML = b + ":" + c + ":" + d;
    setTimeout(gct,1000);
}

gct();