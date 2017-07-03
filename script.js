var empty = [ ]
var symbol = ['+', '-', '/', '*', '.']

$(document).ready(function(){
    $('span').mousedown(function(){
        $(this).css("background","orange")
    });
    $('span').mouseup(function(){
        $(".num").css("background","white")
        $(".symbol").css("background","darkgray")
    });

    $('#num-1').mousedown(function(){
        $('#readout').append(1);
     });
     $('#num-2').mousedown(function(){
         $('#readout').append(2);
     });
     $('#num-3').mousedown(function(){
        $('#readout').append(3)
     });
     $('#num-4').mousedown(function(){
         $('#readout').append(4); 
     });
     $('#num-5').mousedown(function(){
         $('#readout').append(5);
     });
     $('#num-6').mousedown(function(){
         $('#readout').append(6);
     });
     $('#num-7').mousedown(function(){
         $('#readout').append(7);
     });
     $('#num-8').mousedown(function(){
         $('#readout').append(8);
     });
     $('#num-9').mousedown(function(){
         $('#readout').append(9);
    });
    $('#clear').mousedown(function(){
        empty.lenth=0;
        $('#readout').empty();
    });
     $('#num-0').mousedown(function(){
        $('#readout').append(0);
     });
    $('#add').mousedown(function(){    
        $('#readout').append(symbol[0]);
    });
    $('#subtract').mousedown(function(){
        $('#readout').append(symbol[1]);
    });
    $('#multiply').mousedown(function(){ 
        $('#readout').append(symbol[3]);
    });
    $('#divide').mousedown(function(){    
        $('#readout').append(symbol[2]);
    });
    $('#decimal').mousedown(function(){    
        $('#readout').append(symbol[4]);
    });
    $('#result').mousedown(function(){
        empty.push(document.getElementById("readout").innerHTML) 
        console.log(empty)
        empty.join(" ");
        var solution = empty.join(" ");
        var answer = eval(solution);
        $('#readout').empty();
        $('#readout').append(answer);
        empty.length=0;
        console.log(answer)
    });
});