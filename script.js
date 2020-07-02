var colorHe="0123456789abcdef";


window.onload=function(even){

}

function buscarColor(){
    var segundo="#";
    var color=document.getElementById("colorD").value;
    var res=[];
    for(var i=1;i<color.length;i++){
        var cont,ban=0,j=0;
        switch(i){
            case 1:cont=-3; break;
            case 2:cont=-3; break;
            case 3:cont=-2; break;
            case 4:cont=1;  break;
            case 5:         break;
            case 6:cont=2;  break;
        }
        while(ban==0&&j<16){         
            if(color.charAt(i)==colorHe.charAt(j)){
                ban=1;
                if((j+cont)<=15&&(j+cont)>=0){
                    segundo+=colorHe[j+cont];                
                }else {
                    segundo+=colorHe[j-cont];
                }
            }
            j++;
        }
    }
    res.push(color);res.push(segundo);
    return res;
    
}

function crear(){
   
    var padre=document.getElementById("padre");
    var newDiv=document.createElement("div");
    
    var div1=document.createElement("div");
    var div2=document.createElement("div");
    var bot=document.createElement("button");
    var res=buscarColor();
    newDiv.className="posicion";
    newDiv.style.background="linear-gradient(to left,"+res[1]+" 50%,"+res[0]+" 50%)";
    div1.className="interno";
    div2.className="interno";
    bot.className="eliminar";
    bot.setAttribute("onclick","eliminar(this)");

    div1.appendChild(document.createTextNode("Hola-tarea"));
    div2.appendChild(document.createTextNode("01 07 2020"));
    bot.appendChild(document.createTextNode("X"));
    
    padre.appendChild(newDiv);
    newDiv.insertBefore(bot,null);
    newDiv.insertBefore(div1,bot);
    newDiv.insertBefore(div2,div1);
}

function eliminar(nodo){
    var p=document.getElementById("padre");
    var padre=nodo.parentNode;
     p.removeChild(padre);
}