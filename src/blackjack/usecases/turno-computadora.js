import { pedirCarta, valorCarta, crearCartaHTML } from "./"

/**
 * 
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar 
 * @param {HTMLElement}  elemento elemento HTML para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora 
 * @param {Array<String>} deck 
 */
export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasComputadora, deck = []) => {
    if(!puntosMinimos) throw new Error('Puntos Mínimos son necesarios')
    if(!puntosHTML) throw new Error('Argumento puntosHTML son necesarios')
    if (!deck) throw new Error('El deck es necesario')

    let puntosComputadora = 0
    
    do {
        const carta = pedirCarta(deck)

        puntosComputadora = puntosComputadora + valorCarta( carta )
        puntosHTML.innerText = puntosComputadora
        
        const imgCarta = crearCartaHTML(carta)
        divCartasComputadora.append( imgCarta )

        if( puntosMinimos > 21 ) {
            break
        }

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21))
    
    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana')
        } else {
            alert('Computadora Gana')
        }
    }, 100 )
}