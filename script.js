function criptografar() {
    let texto = document.getElementById("texto").value;
    let tituloMensagem = document.getElementById("titulo-mensagem");
    let boneco = document.getElementById("boneco");

    let textoCifrado = texto
        .replace(/e/gi, "ens")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "alt")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat")
        .replace(/b/gi, "bin" )
        .replace(/s/gi, "saz")

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensagem.textContent = "Texto criptografado com sucesso!";
        boneco.src = "Imagens /boneco.png";
    } else {
        boneco.src = "Imagens /boneco.png";
        tituloMensagem.textContent = "Nenhum texto foi encontrado";
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Não há texto para criptografar!',
            })
    }

}

function descriptografar() {
    let texto = document.getElementById("texto").value;
    let tituloMensagem = document.getElementById("titulo-mensagem");
    let boneco = document.getElementById("boneco");

    let textoCifrado = texto
        .replace(/ens/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/alt/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u")
        .replace(/bin/gi, "b" )
        .replace(/saz/gi, "s")

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensagem.textContent = "Texto descriptografado com exito";
        boneco.src = "Imagens /boneco.png";
    } else {
        boneco.src = "Imagens /boneco.png";
        tituloMensagem.textContent = "Nenhuma mensagem foi encontrada";
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Texto não encontrado para criptografar',
            })
    }
}