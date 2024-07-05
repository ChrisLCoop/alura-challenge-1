

function convertirTexto() {
    var primeraVentana = document.getElementById('primerEstadoEspera');
    var segundaVentana = document.getElementById('segundoEstadoEspera');
    var textarea = document.getElementById('entradaDatos');
    var mostrarResultado = document.getElementById('salidaTexto');

    primeraVentana.classList.add("cont-dis-prev")
    segundaVentana.classList.add("second-state")

    var valor = textarea.value;

    // cambios de reemplazo
    var cambios = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    // Convertir el texto usando las cambios
    var textoConvertido = valor.replace(/[eioua]/g, function(match) {
        return cambios[match];
    });

    // Mostrar el resultado
    mostrarResultado.innerHTML = textoConvertido
    
}

function decodificarTexto(){
    var primeraVentana = document.getElementById('primerEstadoEspera');
    var segundaVentana = document.getElementById('segundoEstadoEspera');
    var textarea = document.getElementById('entradaDatos');
    var mostrarResultado = document.getElementById('salidaTexto');
    
    var valor = textarea.value;
    primeraVentana.classList.add("cont-dis-prev")
    segundaVentana.classList.add("second-state")

    var cambios = {
        'ai':'a',
        'enter':'e',
        'imes':'i',
        'ober':'o',
        'ufat':'u'
    }

    // Convertir el texto usando las cambios
    var textoConvertido = valor;
    for (var clave in cambios) {
        var regex = new RegExp(clave, 'g');
        textoConvertido = textoConvertido.replace(regex, cambios[clave]);
    }

    mostrarResultado.innerHTML = textoConvertido
}

function copiarResultado(){
    let elementoTemporal = document.createElement("textarea");
    let textoCopiado = document.getElementById('salidaTexto').innerText;
    elementoTemporal.value = textoCopiado;
    document.body.appendChild(elementoTemporal);
    elementoTemporal.select();
    document.execCommand("copy");
    document.body.removeChild(elementoTemporal);

}

function limpiar(){
    var primeraVentana = document.getElementById('primerEstadoEspera');
    var segundaVentana = document.getElementById('segundoEstadoEspera');

    document.getElementById('entradaDatos').value="";
    primeraVentana.classList.remove("cont-dis-prev")
    segundaVentana.classList.remove("second-state")
   
}


