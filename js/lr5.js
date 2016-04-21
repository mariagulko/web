window.onload = function showDate(){
    var date = new Date();
    var format_date = date.format("dd.mm.yyyy");
    var copyright =  document.getElementById("copyright");
    copyright.innerHTML = format_date;
}

var rotateLogo = 0;
setInterval(function(){
rotateLogo+=1;
  $('#logo').css({transform:"rotate("+rotateLogo+"deg)"});  
},10);



function showDate(){
    var date = new Date();
    var format_date = date.format("dd.mm.yyyy");
    document.getElementById("copyright").innerHTML = format_date;
    clearInterval(window.inter);
}

function showTime(){
    //(function(){
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

//        window.setTimeout(arguments.callee, 1000);
       // })();
}

//function collaps(header){
//    var main_block = header.parentNode.getElementsByTagName("div");
//    var block;
//    for(var i=0; i<main_block.length; i++){
//        if(main_block[i].className=="test")
//            {block=main_block[i]}
//    }
//    if (block.style.display=="none")
//        {
//            block.style.display="block";
//        }
//    else
//        {
//            block.style.display="none";
//        }
//}
$('#test1').slideUp();
$('#test2').slideUp();
$('#reklama').click(function(){
    $('#test1').slideToggle();    
});

$('#news').click(function(){
    $('#test2').slideToggle();    
});




function newWindow(){
    window.open("http://javascript.ru/", "javascript.ru" , "width=800,height=600");
}

/*$("#toggle_links").click(function(){
    $("#hidden").slideToggle();
});*/

