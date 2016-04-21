var date = new Date();

$(window).load(function(){    
    var format_date = date.format("dd.mm.yyyy");
    var copyright =  document.getElementById("copyright");
    copyright.innerHTML = format_date;    
});

$('#copyright').mouseover(function(){
    window.inter=setInterval(function(){
        var date = new Date();
        var formatHour,formatMin,formatSec; 

        if(date.getHours()<10) 
        formatHour = "0"+date.getHours(); 
        else 
        formatHour = date.getHours(); 

        if(date.getMinutes()<10) 
        formatMin = "0"+date.getMinutes(); 
        else 
        formatMin = date.getMinutes(); 

        if(date.getSeconds()<10) 
        formatSec = "0"+date.getSeconds(); 
        else 
        formatSec = date.getSeconds(); 

        copyright.innerHTML = formatHour +":"+formatMin+":"+formatSec;
    }, 100);
});

$('#copyright').mouseout(function(){
    var date = new Date();
    var format_date = date.format("dd.mm.yyyy");
    var copyright =  document.getElementById("copyright");
    copyright.innerHTML = format_date;
    clearInterval(window.inter);
});

var rotateCircle = 0;
$('#logo').mouseover(function(){
    window.inter = setInterval(function(){
    rotateCircle+=1;
    $('#logo').css({transform:"rotate("+rotateCircle+"deg)"});  
    },10);
});
$('#logo').mouseout(function(){
    clearInterval(window.inter);
});

$('#reklama').click(function(){
    $('#test1').slideToggle();    
});

$('#news').click(function(){
    $('#test2').slideToggle();    
});

$('#logo').click(function(){
    window.open("http://javascript.ru/", "javascript.ru" , "width=800,height=600");
});

/*$("#toggle_links").click(function(){
    $("#hidden").slideToggle();
});*/

