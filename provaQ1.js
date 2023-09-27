function converteFormato(horario) {
    let turno = horario.slice(-2)
    if ( turno === "PM") {
        let hora = parseInt(horario.slice(0,2))
        hora += 12
        return `${hora}${horario.slice(2,-2)}`
    }
    
    return horario.slice(0,-2)
}