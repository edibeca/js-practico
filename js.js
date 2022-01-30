
console.group("Cuadrado");
function pericua(){
    const input=document.getElementById("Inputcua");
    const lado=input.value;
    let perimetro=4*lado;
    alert(perimetro);
}
function areacua(){
    const input=document.getElementById("Inputcua");
    const lado=input.value;
    let area=lado**2;
    alert(area);
}
console.groupEnd();
console.group("Triangulo");
function peritri(){
    const input1=document.getElementById("Input1");
    const lado1=input1.value;
    const input2=document.getElementById("Input2");
    const lado2=input2.value;
    const input3=document.getElementById("Input3");
    const lado3=input3.value;
    const suma=(parseInt(lado1) + parseInt(lado2) + parseInt(lado3));
    let perimetro = suma;
    alert(perimetro);
}
function areatri(){
    const input1=document.getElementById("Input1");
    const lado1=input1.value;
    const input2=document.getElementById("Input2");
    const lado2=input2.value;
    const input3=document.getElementById("Input3");
    const lado3=input3.value;
    const semip=(parseInt(lado1) + parseInt(lado2) + parseInt(lado3))/2;
    const semiarea=(semip*(semip-lado1)*(semip-lado2)*(semip-lado3));
    let area=Math.sqrt(semiarea);
    alert(area);
}
console.groupEnd();
console.group("Circulo");
function perici(){
    const input=document.getElementById("Inputcir");
    const radio=input.value;
    let perimetro = (2*(Math.PI))*radio;
    alert(perimetro);
}
function areaci(){
    const input=document.getElementById("Inputcir");
    const radio=input.value;
    const racu=radio**2;
    let area=(Math.PI)*(racu);
    alert(area);
}
console.groupEnd();