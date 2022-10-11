
$(document).ready(function(){
    $("#begin-secion").click(function() {
        event.preventDefault();     
           $("#pop-up").addClass('show')
           $("#pop-wrap").addClass('show')
           });
     
           $("#close").click(function(){
            
            $("#pop-up").removeClass('show')
            $("#pop-wrap").removeClass('show')
           });

           $("#crear_cuenta").click(function(){
            event.preventDefault();  
            $("#line-reg").addClass('lineR')
            $("#pop-up-reg").addClass('show')
            $("#pop-wrap-reg").addClass('show')
           });
           $("#close-reg").click(function(){
            $("#pop-up-reg").removeClass('show')
            $("#pop-wrap-reg").removeClass('show')
           });
          
           $(document).click(function() {
            var obj = $("#container");
             if (!obj.is(event.target) && !obj.has(event.target).length) {
                
               }
             else {
                $("#navbarNavAltMarkup").collapse('hide');
             
                }
               });
           
               
              
            });
        
   
            
 

 
       
btn_registrar = $('#registrar');
btn_registrar.on('clicl',mostrarMensaje1);
function mostrarMensaje1(){
    alert('Bienvenido al curso JavaScript de aprenderaprogramar.com');
    }
    
    function mostrarMensaje2( ){
    alert('Ha hecho click sobre el párrafo inferior');
    }
    
    function mostrarMensaje3(){
        
}
    
   
        
    function mostrarNombre(){
    event.preventDefault();
        var name = document.getElementById("name").value;
        if(parseInt(name)==3){
            alert("es el numero correcto")
        }else{
            
      document.getElementById("load").style.visibility = "visible";
           
            
         
         
         var suma=parseInt(name)+3;
           //alert("hola"+suma)
           document.getElementById('resultado').innerHTML = suma;
            var salida = document.getElementById("resultado").innerHTML.preventDefault=suma;
           
            
        }

    }
    function mostrarPopUp(){

        document.getElementById("pop-up").style.visibility = "visible";
      

    }
    function saveContact(){

        var name = document.getElementById("name_con").value;
        var telefono = document.getElementById("cel_con").value;
            alert("BIENVENIDO"+telefono+"   "+name);
            
           // var salida = document.getElementById("resultado").innerHTML=suma;
            
        }
window.addEventListener("load",function(){
     
    $.getJSON("base_datos/usuarios1.json", function (data) {
      //S  alert("hola"+data.nombre)
        
       

   });

   
});


        //how connect to sqmyl?



        
        
     
          