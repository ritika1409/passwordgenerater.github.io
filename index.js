var keylist="abcdefghijklmnopqrstuvwxyz@#$%&*!";
var temp='';
function generate(plength){

temp=''
for (var i = 0; i < plength; i++) {
temp += keylist.charAt(Math.floor(Math.random()*keylist.length))
}
return temp;
}
function populateform(enterlength){

document.passgen.output.value=generate(enterlength)
}
