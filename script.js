$(document).ready(function(){
    $('span').mousedown(function(){
        $(this).css("background","orange")
    });
    $('span').mouseup(function(){
        $(".num").css("background","white")
        $(".symbol").css("background","darkgray")
    });
    $('#num-0').mousedown(function(){
        $('#readout').text("0")

        
    });
    $('#num-1').mousedown(function(){
        $('#readout').append("1")
        
    });
    $('#num-2').mousedown(function(){
        $('#readout').append("2")
        
    });
    $('#num-3').mousedown(function(){
        $('#readout').append("3")
        
    });
    $('#num-4').mousedown(function(){
        $('#readout').append("4")
        
    });
    $('#num-5').mousedown(function(){
        $('#readout').append("5")
        
    });
    $('#num-6').mousedown(function(){
        $('#readout').append("6")
        
    });
    $('#num-7').mousedown(function(){
        $('#readout').append("7")
        
    });
    $('#num-8').mousedown(function(){
        $('#readout').append("8")
        
    });
    $('#num-9').mousedown(function(){
        $('#readout').append("9")
        
    });
    $('#clear').mousedown(function(){
        $('#readout').empty();
    });
    $('#num-0').mousedown(function(){
        $('#readout').append("0");
        
    });
});