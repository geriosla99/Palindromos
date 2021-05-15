function palindrome(texto){
    let textoLibre = texto.toLowerCase().replace(/[\W_]/g,"");
    let ultimaletra= textoLibre.length -1;
  
    let verificar = false;


    for (var i = 0; i < ultimaletra ; i++) {
        if(textoLibre[i] == textoLibre[ultimaletra]){
            verificar = true;
            ultimaletra --;
        }else {
            verificar = false
            i += 3; 
        }
        
    }

    return verificar;

}

palindrome("vaca");