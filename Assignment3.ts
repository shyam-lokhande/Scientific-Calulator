var num:HTMLInputElement = <HTMLInputElement>document.getElementById("i1");
var display:HTMLInputElement =<HTMLInputElement>document.getElementById("i2");


function sin(){
    var number: number=parseFloat(num.value);
    var result: number= Math.sin(number*Math.PI/180);
    display.value = result.toString();
}
function cos(){
    var number: number=parseFloat(num.value);
    var result: number= Math.cos(number*Math.PI/180);
    display.value = result.toString();
}
function tan(){
    var number: number=parseFloat(num.value);
    var result: number= Math.tan(number*Math.PI/180);
    display.value = result.toString();
}
function asin(){
    var number: number=parseFloat(num.value);
    
    var result: number= Math.asin(number);
    var inverse: number=result*180/Math.PI;
    display.value = inverse.toString();
}
function acos(){
    var number: number=parseFloat(num.value);
    var result: number= Math.acos(number);
    var inverse: number=result*180/Math.PI;
    display.value = inverse.toString();
}
function atan(){
    var number: number=parseFloat(num.value);
    var result: number= Math.atan(number);
    var inverse: number=result*180/Math.PI;
    display.value = inverse.toString();
}
function sqr(){
    var number: number=parseFloat(num.value);
    var result: number= Math.pow(number,2);
    display.value = result.toString();
}
function cube(){
    var number: number=parseFloat(num.value);
    var result: number= Math.pow(number,3);
    display.value = result.toString();
}
function sqrt(){
    var number: number=parseFloat(num.value);
    var result: number= Math.sqrt(number);
    display.value = result.toString();
}