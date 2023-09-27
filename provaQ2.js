function contaPalavras(frase){
    if (frase){
        let palavras = 1;
        for(let i = 0; i < frase.length; i++){
            if (frase[i] === frase[i].toUpperCase())
                palavras++
        }
        return palavras
    }

    return 0
}