/*Con el elemento innerHtml 
puedo cambiar el contenido de un HTML */
const primeraCaja = document.querySelector('.caja');
primeraCaja.innerHTML = '<b>JesurDev!</b>';


/*Con el elemento .attribute puedo 
acceder y cambiar atributos del elemento*/
primeraCaja.id = 'nuevo-id';

/*Con .setAtribute() puedo
agregar o establecer el valor de 
un atributo del elemento*/
primeraCaja.setAttribute('class', 'caja activa')

/* element.style.property permite
cambiar estilos css de un elemento*/
const contenedor2Caja1 = document.querySelector('#contenedor2 .caja');
contenedor2Caja1.style.background = '#496f16';
contenedor2Caja1.style.color = '#d12fd4';
