function agranda(event){
    if(this.getAttribute("id")=="seleccionado"){
        this.setAttribute("id","")
    }else{
        
        this.setAttribute("id", "seleccionado");
    
        setTimeout(function(){window.location.href = "#seleccionado";},300);
        
    }
    
}
window.onload = function(){
    for(boton of document.getElementsByClassName("card")){
        boton.onclick = agranda;
        
    }
}