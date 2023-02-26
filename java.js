function cotizarSeguro() {
    var valor = parseInt(document.getElementById("monto").value);
    var resultado = 0;
    var tres = 1.20;
    var seis = 1.30;
    var doce = 1.45;
    var dieciocho = 1.55;
    var venticuatro = 1.70;

    if(document.getElementById("tres").checked){
        resultado = valor * tres;
        alert("El valor que deberá abonar en 3 pagos es: $" + resultado);
    }
    else if(document.getElementById("seis").checked){
        resultado = valor * seis;
        alert("El valor que deberá abonar en 6 pagos es: $" + resultado);
    }
    else if(document.getElementById("doce").checked){
        resultado = valor * doce;
        alert("El valor que deberá abonar en 12 pagos es: $" + resultado);
    }
    else if (document.getElementById("dieciocho").checked){
        resultado = valor * dieciocho;
        alert("El valor que deberá abonar en 18 pagos es: $" + resultado);
    }
    else if(document.getElementById("venticuatro").checked){
        resultado = valor * venticuatro;
        alert("El valor que deberá abonar en 24 pagos es: $" + resultado);
    }
    else{
        alert("Tienes que completar todos los requerimientos")
    }
}

function solicitarPrestamo(){
    function SolicitantesDePrestamos (nombre, apellido, edad, telefono, documento){
            this.nombre = nombre;
            this.apellido = apellido;
            this.edad = edad;
            this.telefono = telefono;
            this.documento = documento;
        }
    var nombreSolicitante = document.getElementById("nombre").value;
    var apellidoSolicitante = document.getElementById("apellido").value;
    var edadSolicitante = document.getElementById("edad").value;
    var numeroSolicitante = document.getElementById("numero").value;
    var documentoSolicitante = document.getElementById("documento").value;

    NuevoSolicitantePrestamo = new SolicitantesDePrestamos (nombreSolicitante, apellidoSolicitante, edadSolicitante, numeroSolicitante, documentoSolicitante);
    console.log(NuevoSolicitantePrestamo)
    posicionarListaEspera()
}
var baseDatos= [];
function posicionarListaEspera(){
    baseDatos.push(NuevoSolicitantePrestamo);
    console.log(baseDatos)
document.getElementById("tabla").innerHTML += '<tbody><td>'+NuevoSolicitantePrestamo.nombre+'</td><td>'+NuevoSolicitantePrestamo.apellido+'</td><td>'+NuevoSolicitantePrestamo.documento+'</td></tbody>';
};

