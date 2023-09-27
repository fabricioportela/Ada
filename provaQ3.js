function encontraSolitarios(numeros){
    let repetidos = []
    numeros = numeros.sort()

    for(let i in numeros){
        if (numeros[i] === numeros[parseInt(i)+1]){
            repetidos.push(numeros[i])
        }
    }

    let solitarios = numeros.filter((n)=> !repetidos.includes(n))

    return solitarios
}