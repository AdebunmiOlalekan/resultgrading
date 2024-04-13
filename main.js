
function result(){
    var score1= Number(document.getElementById("text2").value);
    var score2= Number(document.getElementById("text3").value);
    var score3= Number(document.getElementById("text4").value);
    var score4= Number(document.getElementById("text5").value);
    var name = (document.getElementById("student").value);
    var cla = (document.getElementById("cla").value);
    var foot = document.getElementById("footer")
    
    
    var total = score1+score2+score3+score4; 
   var precentage = total/4;

    if (precentage >= 0 && precentage <= 39 ){
            foot.innerHTML =  name + ' from '+ cla + ","+' you got ' + total + "/400" +'  and your precentage is ' + precentage +"% " + 'and your Grade is F9' + " Failed"
    } 

    else if(precentage >= 40 && precentage <= 44) {
        foot.innerHTML =  name + ' from '+ cla + ","+' you got ' + total + "/400" +'  and your precentage is ' + precentage +"% " + 'and your Grade is E8' + ' Very Poor'
    }

    else if(precentage >= 45 && precentage <= 49) {
        foot.innerHTML =  name + ' from '+ cla + ","+' you got ' + total + "/400" +'  and your precentage is ' + precentage +"% " + 'and your Grade is D7' + ' Poor'
    }

    else if(precentage >= 50 && precentage <=59) {
        foot.innerHTML =  name + ' from '+ cla + ","+' you got ' + total + "/400" +'  and your precentage is ' + precentage +"% " + 'and your Grade is C5' + ' Average'
    }
    else if(precentage >= 60 && precentage <= 64) {
        foot.innerHTML =  name + ' from '+ cla + ","+' you got ' + total + "/400" +'  and your precentage is ' + precentage +"% " + 'and your Grade is C4' + ' Put More Effort '
    }

    else if(precentage >= 65 && precentage <=67){
        foot.innerHTML =  name + ' from '+ cla + ","+' you got ' + total + "/400" +'  and your precentage is ' + precentage +"% " + 'and your Grade is A3' + ' Keep Trying '
    }
    else if (precentage >= 68 && precentage <=74){
       foot.innerHTML= name + ' from '+ cla + ","+' you got ' + total + "/400" +'  and your precentage is ' + precentage +"% " + 'and your Grade is A2'  +  ' Excelent '

    }
    else if(precentage>= 75 && precentage <= 100){
        foot.innerHTML ='Congratulation ' + name + ' from '+ cla + ","+' you got ' + total + "/400" +'  and your precentage is ' + precentage +"% " + 'and your Grade is A1'  +  ' Excelent '
    }
   }
   
   
