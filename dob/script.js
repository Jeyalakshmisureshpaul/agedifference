
var dateelement=document.createElement('input');
dateelement.setAttribute('type','date');
dateelement.setAttribute('id','date');
document.body.append(dateelement);

var button=document.createElement('button');
button.innerHTML="Display data";
button.className="btn btn-primary";
button.setAttribute('type','button');
button.addEventListener('click',displaydata);
document.body.append(button);


function displaydata(){
    let input=document.getElementById("date").value;
   if(Date.parse(input)){
    var inputdate=new Date(input);
    var currentdate=new Date();
    // console.log(inputdate,currentdate);
    var millisecdiff=currentdate.getTime()-inputdate.getTime();
    console.log(millisecdiff);
    var seconddiff=Math.floor(millisecdiff/1000);
    console.log(seconddiff);
    var minutediff=Math.floor(seconddiff/60);
    console.log(minutediff);
    var hourdiff=Math.floor(minutediff/60);
    console.log(hourdiff);
    var daydiff=Math.floor(hourdiff/24);
    console.log(daydiff);
    var yeardiff=currentdate.getFullYear()-inputdate.getFullYear();
    console.log(yeardiff);
    var monthdiff=(yeardiff*12)+currentdate.getMonth()-inputdate.getMonth();
    console.log(monthdiff);
   }
   else{
       console.log("invalid date");
   }
    var division1 = document.createElement('div');
    division1.innerHTML=`currentdate:${currentdate}<br>
    inputdate:${inputdate}<br>
    milisecound difference:${millisecdiff}<br>
    Second difference:${seconddiff}<br>
    Minute Difference:${minutediff}<br>
    Hours Difference:${hourdiff}<br>
    Day Difference:${daydiff}<br>
    Year Difference:${yeardiff}<br>
    Month Difference:${monthdiff}`
  document.body.append(division1);
  }