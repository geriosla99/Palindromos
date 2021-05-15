function palindrome() {
    var texto = document.getElementById("input").value;
    let textoLibre = texto.toLowerCase().replace(/[\W_]/g, "");
    let ultimaletra = textoLibre.length - 1;
    
    let verificar = false;


    for (var i = 0; i < ultimaletra; i++) {
        if (textoLibre[i] == textoLibre[ultimaletra]) {
            verificar = true;
            ultimaletra--;
        } else {
            verificar = false
            i += 3;
        }

    }

    if (verificar == true){
        document.getElementById('palabra').textContent = "Sí es palindromo";

    }else{
        document.getElementById('palabra').textContent = "No es palindromo";
    }

    
}


