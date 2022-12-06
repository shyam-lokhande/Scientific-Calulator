var num = document.getElementById("i1");
var display = document.getElementById("i2");
function sin() {
    var number = parseFloat(num.value);
    var result = Math.sin(number * Math.PI / 180);
    display.value = result.toString();
}
function cos() {
    var number = parseFloat(num.value);
    var result = Math.cos(number * Math.PI / 180);
    display.value = result.toString();
}
function tan() {
    var number = parseFloat(num.value);
    var result = Math.tan(number * Math.PI / 180);
    display.value = result.toString();
}
function asin() {
    var number = parseFloat(num.value);
    var result = Math.asin(number);
    var inverse = result * 180 / Math.PI;
    display.value = inverse.toString();
}
function acos() {
    var number = parseFloat(num.value);
    var result = Math.acos(number);
    var inverse = result * 180 / Math.PI;
    display.value = inverse.toString();
}
function atan() {
    var number = parseFloat(num.value);
    var result = Math.atan(number);
    var inverse = result * 180 / Math.PI;
    display.value = inverse.toString();
}
function sqr() {
    var number = parseFloat(num.value);
    var result = Math.pow(number, 2);
    display.value = result.toString();
}
function cube() {
    var number = parseFloat(num.value);
    var result = Math.pow(number, 3);
    display.value = result.toString();
}
function sqrt() {
    var number = parseFloat(num.value);
    var result = Math.sqrt(number);
    display.value = result.toString();
}
