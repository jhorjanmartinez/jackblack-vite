import _ from "underscore";


/**
 * esta funcion crea un nuevo deck
 * @param {Array <string>} tiposDeCarta ejemplo: ['C','D','H','S'];
 * @param {Array <string>} tiposEspeciales ejemplo: ['A','J','Q','K']
 * @returns {Array <string>} retorna un nuevo deck de carta
 */
 export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if( !tiposDeCarta || tiposDeCarta.length === 0 ) 
    throw new error('TiposDeCarta es obligatorio como un arreglo de string ' );

    if( !tiposDeCarta || tiposEspeciales.length === 0 ) 
    throw new error('TiposDeCarta es obligatorio como un arreglo de string ' );

    let deck = []

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}

// export default crearDeck;