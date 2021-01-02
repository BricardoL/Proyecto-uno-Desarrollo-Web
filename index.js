let arr= [];
function multiplicar(){
    var numberOne = document.getElementById("one").value;
    var numberTwo = document.getElementById("two").value;
    var multTotal = numberOne * numberTwo;
    var accessDiv = document.getElementById("result");
    accessDiv.innerHTML = `<p id="prueba">El resulado es: ${multTotal}</p>`;
}

function guardarNombre(){
    var name = document.getElementById("name").value;
    arr.push(name);
    document.getElementById("result").innerHTML = `<p>${arr}</p>`;
}

function save(){
    var name = document.getElementById("name").value;
    var lastname = document.getElementById("lastname").value;
    var age = document.getElementById("age").value;
    //Regex para numeros
    var regex = /^(?:[1-9]\d*|\d)$/; 
    
    if(name && lastname && age){
        if(regex.test(age)){
    document.getElementById("result").innerHTML = `<p>Nombre: ${name}</p>
    <p>Apellido: ${lastname}</p>
    <p>Edad: ${age}</p>`;
        } else{
            alert("Edad solo admite numeros");
        }
    }else{
        alert("Introduzca todos los campos");
    }
}