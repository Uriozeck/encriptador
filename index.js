const encriptarTexto = document.querySelector("#texto-encriptado");
const mensajeEncriptado = document.querySelector("#mensaje-encriptado");
// const copiarTexto = document.querySelector("#btn-copiar");
const matrizVocales = [ 
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
    ["é", "enter"],
    ["í", "imes"],
    ["á", "ai"],
    ["ó", "ober"],
    ["ú", "ufat"],
];
const copiarTexto = document.getElementById("#btn-copiar");

    function btnEncriptar() {
        const texto = encriptar(encriptarTexto.value.toLowerCase());
        mensajeEncriptado.value = texto;
    }

    function encriptar(fraseAEncriptar) {
        for (let i = 0; i < matrizVocales.length; i++) {
            if (fraseAEncriptar.includes(matrizVocales[i][0])) {
                fraseAEncriptar = fraseAEncriptar.replaceAll(matrizVocales[i][0], matrizVocales[i][1]);
            }
        }
        return fraseAEncriptar;
    }

    function btnDesencriptar() {
        const mensaje = desencriptar(encriptarTexto.value.toLowerCase());
        mensajeEncriptado.value = mensaje;
    }

    function desencriptar(fraseADesencriptar) {
        for (i = 0; i < matrizVocales.length; i++) {
            if (fraseADesencriptar.includes(matrizVocales[i][1])) {
                fraseADesencriptar = fraseADesencriptar.replaceAll(matrizVocales[i][1], matrizVocales[i][0]);
            }
        }
        return fraseADesencriptar;
    }

    function btnCopiar() {
        const copiar = (mensajeEncriptado.value.toLowerCase());
        encriptarTexto.value = copiar;
        navigator.clipboard.writeText(copiar);
    }
