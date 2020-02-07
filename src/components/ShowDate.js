import React from 'react';

function ShowDate() {

    let meses = new Array ("enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre");
    let f = new Date();

    let fecha = f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear();

    return(
    <h2 className="pink-text darken-4">Hoy es { fecha }</h2>
    );
}

export default ShowDate;