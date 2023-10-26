let text = "";
let i = 0;
for( ; ; ){
    if(i < 101){
        text += "the number is" + i + "<br>"; 
    i++
    }
    else{
        break;
    }
    
}
document.getElementById("demo").innerHTML = text;