let nombre= prompt("Ingresa tu nombre por favor");
let apellido1= prompt("Escribe tu primer apellido");
let apellido2= prompt("Escribe tu segundo apellido");
let añoActual= parseInt(prompt("¿Me puedes decir el año actual?"));
let añoNacimiento= parseInt(prompt("¿En que año naciste?"));
let nombreCompleto= nombre+" "+apellido1+" "+apellido2;
let edad=añoActual-añoNacimiento;
alert("Hola "+ nombreCompleto +" " + " un gusto conocerte. "+ " " + " Al parecer tu edad es: "+ edad);
