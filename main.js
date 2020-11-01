var Student=[];
function submit(){
    var display=[];
   for( var j=1; j<=4 ; j++){
       var Name_1 =document.getElementById("name_of_the_student_"+j).value;
       Student.push(Name_1);
   }
   var length=Student.length;
   for( var k=0; k<length; k++){
       display.push("<h4> NAME-"+Student[k]+"</h4>");
   }
    document.getElementById("display_name_with_commas").innerHTML=display;
    var remove=display.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}

function sorting(){
Student.sort();
var display_1=[];
var length=Student.length;
for( var k=0; k<length; k++){
    display_1.push("<h4> NAME-"+Student[k]+"</h4>");
}
var remove=display_1.join(" ");
document.getElementById("display_name_without_commas").innerHTML=remove;
}
