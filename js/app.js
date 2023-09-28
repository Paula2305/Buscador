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
    mostrarAutos(autos);

    llenarSelect(); // Llena las opciones de años

});

// Event listener para los select de busqueda
marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;
    // console.log(datosBusqueda);

    filtrarAuto();
});

year.addEventListener('change', e => {
    datosBusqueda.year = parseInt(e.target.value); // Todos los datos de un formulario vienen como string y por eso se parsea a entero

    filtrarAuto();
});

minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value; 

    filtrarAuto();
});

maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;

    filtrarAuto();
});

puertas.addEventListener('change', e => {
    datosBusqueda.puertas = e.target.value;

    filtrarAuto();
});

transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;

    filtrarAuto();
});

color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;

    filtrarAuto();
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
function mostrarAutos(autos){
    limpiarHTML();// Elimina el HTML previo
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

// Limpiar HTML

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}


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

//Funcion que filtra en base a la busqueda

function filtrarAuto(){
    // console.log('filtrando');
    const resultado = autos.filter( filtrarMarca ).filter( filtrarYear ).filter(filtrarMinimo).filter(filtrarMaximo);

    // console.log(resultado);

    mostrarAutos(resultado);
}

function filtrarMarca(auto){
    const {marca} = datosBusqueda;

    // console.log(auto);
    if(marca){
        return auto.marca === marca;
    }

    // si el usuario no selecciona nada
    return auto;
}

function filtrarYear(auto){
    const {year} = datosBusqueda;
    // console.log(typeof year);
    // console.log(typeof auto.year);

    if(year){
        return auto.year === year;
    }

    // si el usuario no selecciona nada
    return auto;
}

function filtrarMinimo(auto){
    const {minimo} = datosBusqueda;
    // console.log(typeof year);
    // console.log(typeof auto.year);

    if(minimo){
        return auto.precio >= minimo; // no hace falta el parse porque porque no es un operador estricto 
    }

    // si el usuario no selecciona nada
    return auto;
}

function filtrarMaximo(auto){
    const {maximo} = datosBusqueda;
    // console.log(typeof year);
    // console.log(typeof auto.year);

    if(maximo){
        return auto.precio <= maximo; // no hace falta el parse porque porque no es un operador estricto 
    }

    // si el usuario no selecciona nada
    return auto;
}








