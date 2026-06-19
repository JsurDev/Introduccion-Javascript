const agregarCaja = () => {
    /*creamos el elemento */
    const nuevaCaja = document.createElement('div');
    /*Agregamos el texto y atributos */
    nuevaCaja.innerText = 'Nueva Caja';
    //nuevaCaja.setAttribute('id', 'nuevo-id');
    nuevaCaja.setAttribute('class', 'caja activa');

    //agregamos la caja al DOM
    const contenedor = document.getElementById('contenedor1');

    //agregamos el elemento al final
    //contenedor.appendChild(nuevaCaja);

    /*insertAdjacentElement(), se usa para 
    agregar elementos*/
    contenedor.insertAdjacentElement('afterbegin', nuevaCaja);
    /*
    contenedor.insertAdjacentElement('afterend', nuevaCaja);
    contenedor.insertAdjacentElement('beforebegin', nuevaCaja);
    contenedor.insertAdjacentElement('beforeend', nuevaCaja);
     */

    
};