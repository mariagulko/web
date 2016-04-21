function countWeeks(){
    var date = new Date();
    var current_year = date.getFullYear();
    var september;
    if (date.getMonth()<8){
        september = new Date(current_year-1, 8, 1);
    } else {
        september = new Date(current_year, 8, 1);
    }
    var difference;
    difference = date.getTime()-september.getTime();
    var weeks = difference/(7*24*60*60*1000);
    document.getElementById("weeks").value = weeks-weeks%1;
    //document.getElementById("weeks").value = weeks.toFixed(0);
}
            
function clear(){
    document.getElementById("weeks").value = null; 
}

var date = new Date();
if (((date.getFullYear() % 4 == 0) && (date.getFullYear() % 100 != 0)) || (date.getFullYear() % 400 == 0)) {
    alert(date.getFullYear() + " - високосный");
} else {
    alert(date.getFullYear() + " - не високосный");
}

var mon = ['я','н','в','а','р','ь',' ','ф','е','в','р','а','л','ь',' ','м','а','р','т',' ','а','п','р','е','л','ь',' ','м','а','й',' ','и','ю','н','ь',' ','и','ю','л','ь',' ','а','в','г','у','с','т',' ','с','е','н','т','я','б','р','ь',' ','о','к','т','я','б','р','ь',' ','н','о','я','б','р','ь',' ','д','е','к','а','б','р','ь'];
var num = ["один", "два", "три", "четыре", "пять"];
var count = 0;
function months(){
    count++;    
}
var j=0;
var mon1;
var word;
var last;

function letter(){
    word = num[count-1];
    //last = word[(word.length)-1];
    last = word.charAt(word.length-1);
    for (var k in mon){
        if(mon[k]!=last){
            mon1=mon[k];
        } break;
        k++;
    }
    for (var j = 1; j<mon.length; j++){
        if(mon[j]!=last){
            mon1+=mon[j];
        }
    }
    /*for(j in mon){
        j++;
        if(mon[j]!=last){
            mon1+=mon[j];
        }
    }*/
    alert(mon1);
    mon1=null;
}
/*function isletter(value){
    word = num[count-1];
    last = word.charAt(word.length-1);
    /*for(j in mon){
        if(mon[j]!=last){
            return true;
        } else return false;
        j++;
    }*/
    //return value !== last;
    //return mon[j] != last;
//}
/*var mon1 = mon.filter(
    function (letter){
        return letter == last;
    }
);
var str = mon1.join('');*/
function mssg(){
    alert(str);
}

/*
var nums = ["One","Two","Three"];
var translate = 0;*/

//var numbers = document.getElementById('numbers');



/*$('.liJs').mouseover(function(){
    
$('#numbers').css({transform:"scale(3)", transition:"1s",opacity:"1"});   
setTimeout(function(){$('#numbers').css({transform:"scale(1)", opacity:"0"});   },1000)    
});*/


