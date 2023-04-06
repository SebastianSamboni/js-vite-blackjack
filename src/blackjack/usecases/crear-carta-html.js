export const crearCartaHTML = (carta) => {
    if (!carta) throw new Error('La carta es un argumento obligatorio')
    
    const imgCarta = document.createElement('img')
    imgCarta.src = `assets/cartas/${carta}.png`
    imgCarta.classList.add('carta')

    return imgCarta
}