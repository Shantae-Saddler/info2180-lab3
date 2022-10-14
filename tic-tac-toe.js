let track=[]

function clickAction(ps){
    if (track.length==0 || track[0]=="O"){
        ps.textContent= "X"
        ps.classList.add("x")
        track[0]="X"
    }
    else if (track[0]== "X"){
        ps.textContent= "O"
        ps.classList.add("O")
        track[0]="O"
    }
}

onload = function(){
    var_div=document.getElementById("board").children

    for(let i=0 ;i< var_div.length; i++){
        var_div[i].setAttribute("class","square")
        var_div[i].setAttribute("onclick","clickAction(this)")
    }

    console.log(var_div)
}