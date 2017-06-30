var empty = [ ]
var symbol = ["+", "-", "/", "*"]
$(document).ready(function(){
    $('span').mousedown(function(){
        $(this).css("background","orange")
    });
    $('span').mouseup(function(){
        $(".num").css("background","white")
        $(".symbol").css("background","darkgray")
    });
    $('.num').mousedown(function(){

       $('num-').append(empty).text();
        console.log(empty)
    
   /* $('#add').mousedown(function(){
        $('#readout').append("+");
    });
     $('#subtract').mousedown(function(){
        $('#readout').append("-");
    });
     $('#multiply').mousedown(function(){
        $('#readout').append("*");
    });
     $('#divide').mousedown(function(){
        $('#readout').append("/");
    });*/
    $('#add').mousedown(function(){
        
        });
        

    });
});