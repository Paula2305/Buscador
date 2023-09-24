//Variables
const resultado = document.querySelector('#resultado');

const year = document.querySelector('#year');

const max = new Date().getFullYear(); // agrega desde el año en el que te encontras
const min = max - 10;

console.log(max);
console.log(min);

//Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos();

    llenarSelect(); // Llena las opciones de años

})


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

    }

}