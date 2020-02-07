import React from 'react';

function ShowGreeting(){

    let time = new Date();
    let h = time.getHours();

    if (h < 12) {
        return(
        <h4><i class="small material-icons">access_alarm</i> Empieza tu día con nuestros mejores artículos</h4>
        );
    } else if (h > 19) {
        return(
            <h4><i class="small material-icons">brightness_2</i> Termina tu día leyendo nuestros artículos seleccionados para ti</h4>
            );
    } else {
        return(
            <h4><i class="small material-icons">wb_sunny</i> Disfruta tu tarde leyendo nuestra selección de artículos</h4>
            );
    }
}

/* <h1> Buenos dias <i class="medium material-icons">access_alarm</i> </h1> */

export default ShowGreeting;