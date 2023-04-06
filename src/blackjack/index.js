import _ from 'underscore'
import {crearDeck, pedirCarta, valorCarta, turnoComputadora, crearCartaHTML} from './usecases'

let deck         = []
const tipos      = ['C','D','H','S'],
    especiales = ['A','J','Q','K']

let puntosJugador = 0,
    puntosComputadora = 0

// Referencias del HTML
const btnPedir   = document.querySelector('#btnPedir'),
    btnDetener = document.querySelector('#btnDetener'),
    btnNuevo   = document.querySelector('#btnNuevo'),

    divCartasJugador     = document.querySelector('#jugador-cartas'),
    divCartasComputadora = document.querySelector('#computadora-cartas'),

    puntosHTML = document.querySelectorAll('small')

deck = crearDeck(tipos, especiales)

// Eventos
btnPedir.addEventListener('click', () => {
    const carta = pedirCarta(deck)
    
    puntosJugador = puntosJugador + valorCarta( carta )
    puntosHTML[0].innerText = puntosJugador
    
    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = crearCartaHTML(carta)
    divCartasJugador.append( imgCarta )

    if ( puntosJugador > 21 ) {
        btnPedir.disabled   = true
        btnDetener.disabled = true
        turnoComputadora( puntosJugador, puntosHTML[1], divCartasComputadora, deck )

    } else if ( puntosJugador === 21 ) {
        btnPedir.disabled   = true
        btnDetener.disabled = true
        turnoComputadora( puntosJugador, puntosHTML[1], divCartasComputadora, deck )
    }
})

btnDetener.addEventListener('click', () => {
    btnPedir.disabled   = true
    btnDetener.disabled = true

    turnoComputadora( puntosJugador, puntosHTML[1], divCartasComputadora, deck )
})

btnNuevo.addEventListener('click', () => {
    deck = []
    deck = crearDeck(tipos, especiales)

    puntosJugador     = 0
    puntosComputadora = 0
    
    puntosHTML[0].innerText = 0
    puntosHTML[1].innerText = 0

    divCartasComputadora.innerHTML = ''
    divCartasJugador.innerHTML = ''

    btnPedir.disabled   = false
    btnDetener.disabled = false
})