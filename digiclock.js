let b;
function gct(){
    let a=new Date();
    b=a.getHours();
    let c=a.getMinutes();
    let d=a.getSeconds();
 //document.write(b);

    document.getElementById("clock").innerHTML = b + ":" + c + ":" + d;
    setTimeout(gct,1000);


}
gct();

const body=document.body;
const greeting=document.getElementById('greeting');
if(b>=5&& b<12){
    body.style.backgroundColor = "#FFDEAD";
    greeting.textContent = "Good Morning!";
  } else if (b >= 12 && b < 17) {
    body.style.backgroundColor = "#87CEFA"; 
    greeting.textContent = "Good Afternoon!";
  } else if (b>= 17 && b < 20) {
    body.style.backgroundColor = "#FFA07A"; 
    greeting.textContent = "Good Evening!";
  } else {
    body.style.backgroundColor = "#191970"; 
    greeting.textContent = "Good Night!";
  }

  setInterval(updateGreeting, 1000); 

