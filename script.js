const textArea = document.querySelector("[data-text]");
const mensaje = document.querySelector("[data-mensaje]");

function encriptar(stringEncriptada){
    let matrizCodigo = [
        ["e","enter"],
        ["i","imes"],
        ["a","ai"],
        ["o","ober"],
        ["u","ufat"],
    ];
    stringEncriptada=stringEncriptada.toLowerCase()

    for(let i=0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada=stringEncriptada
            .replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
   return stringEncriptada 
}

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value="";
    mensaje.style.backgroundImage="none"
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [
        ["e","enter"],
        ["i","imes"],
        ["a","ai"],
        ["o","ober"],
        ["u","ufat"],
    ];
    stringDesencriptada=stringDesencriptada.toLowerCase()

    for(let i=0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada=stringDesencriptada
            .replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
   return stringDesencriptada 
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value="";
}

function copiarTexto() {
    // Obtener el elemento del textarea por su ID
    const textarea = document.getElementById("texto-a-copiar");

    // Seleccionar el texto dentro del textarea
    textarea.select();
    textarea.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Intentar copiar el texto seleccionado al portapapeles
    const exito = document.execCommand("copy");
    textarea.value="";

    // Mostrar un mensaje según el resultado
    if (exito) {
        alert("Texto copiado al portapapeles");
    } else {
        alert("No se pudo copiar el texto");
    }
}