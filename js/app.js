//Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

// Contenedor para los resultados
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear(); // agrega desde el año en el que te encontras
const min = max - 10;

//Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos();

    llenarSelect(); // Llena las opciones de años

});

// Event listener para los select de busqueda
marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;
    // console.log(datosBusqueda);
});

year.addEventListener('change', e => {
    datosBusqueda.year = e.target.value;
    // console.log(datosBusqueda); 
});

minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;
    // console.log(datosBusqueda); 
});

maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;
    // console.log(datosBusqueda); 
});

puertas.addEventListener('change', e => {
    datosBusqueda.puertas = e.target.value;
    // console.log(datosBusqueda); 
});

transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;
    // console.log(datosBusqueda); 
});

color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
    // console.log(datosBusqueda); 
});


// Generar un objeto con la busqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}


//Funciones
function mostrarAutos(){
    autos.forEach( auto => {

        // destructuring
        const {marca, modelo, year, puertas, transmision, precio, color} = auto;
        const autoHTML = document.createElement('p');

        autoHTML.textContent = ` 
        ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio} - Color: ${color}
        `;

        // insertar en el html
        resultado.appendChild(autoHTML);
    });

};

// Genera los años del Select 
function llenarSelect(){
    // console.log('Llenando el select...');
    for(let i = max; i >= min; i--){
        // console.log(i);
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); // Agrega las opciones de año

    };

};