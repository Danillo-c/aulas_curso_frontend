function soma(){
  var a = parseFloat(document.getElementById('valor01').value);
  var b = parseFloat(document.getElementById('valor02').value);
  document.getElementById('demo').innerHTML = a + b;
  
}
function divisao(){
  var a =parseFloat(document.getElementById('valor01').value);
  var b = parseFloat(document.getElementById('valor02').value);
  document.getElementById('demo').innerHTML = a / b;
}
function subtracao(){
  var a = parseFloat(document.getElementById('valor01').value);
  var b = parseFloat(document.getElementById('valor02').value);
  document.getElementById('demo').innerHTML = a - b;
}
function potenciacao() {
  var a = parseFloat(document.getElementById('valor01').value);
  var b = parseFloat(document.getElementById('valor02').value);
  document.getElementById('demo').innerHTML = Math.pow(a, b);
}
function multiplicacao(){
  var a = parseFloat(document.getElementById('valor01').value);
  var b = parseFloat(document.getElementById('valor02').value);
  document.getElementById('demo').innerHTML = a * b;
}