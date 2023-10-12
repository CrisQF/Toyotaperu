let contador = 0; // Inicializa el contador
let intervalo; // Variable para almacenar el intervalo

// Función para iniciar el conteo cuando se pasa el cursor
function iniciarConteo() {
    // Inicia un intervalo que incrementa el contador cada segundo
    intervalo = setInterval(function () {
        contador++;
        const contadorElemento = document.getElementById("contador");
        contadorElemento.textContent = contador;

        // Verifica si el contador llega a 5 y detiene el intervalo
        if (contador === 5) {
            detenerConteo();
        }
    }, 5000); // Intervalo de 5000 ms (5 segundo)
}

// Función para detener el conteo
function detenerConteo() {
    clearInterval(intervalo);
}

// alert('Hola como vamos');

//Capturar elemento
// let tbody = document.querySelector('tbody');

// fetch('/datos/datos.json')
//     .then((respuesta) => {
//         return respuesta.json()
//     })
//     .then((clientes) => {
//         console.log(clientes)
//         for (let i = 0; i < clientes.length; i++) {
//             tbody.innerHTML += `
//                 <td>${clientes[i].clientes}</td>
//                 <td>${clientes[i].comentario}</td>
//                 <td><img style="width:90%" src="${clientes[i].foto}" alt="${usuarios[i].nombre}"</td>
//             `
//         }

//     })
//     .catch((error) => {
//         console.log('Ha ocurrido un error' + error.message)
//     })

//Desarrollar el código para buscar datos en una API y traerlos para mostrarlo en mi página
let equipo = document.getElementById('equipo');

fetch('https://randomuser.me/api/?results=4')
    .then((respuesta) => {
        return respuesta.json()
    })
    .then((equipoTrabajo) => {
        console.log(equipoTrabajo.results)

        for (let i = 0; i < equipoTrabajo.results.length; i++) {
            equipo.innerHTML += `
        <article class="card col-12 md-6 lg-3" style="width: 18rem;">
        <img src="${equipoTrabajo.results[i].picture.large}" class="card-img-top" alt="${equipoTrabajo.results[i].name.first}
        ${equipoTrabajo.results[i].name.last}">
        <div class="card-body">
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
            card's content.</p>
        <h6 class="text-center">${equipoTrabajo.results[i].name.first}
        ${equipoTrabajo.results[i].name.last}</h6>
        </div>
        </article>
        `;
        }
    })
    .catch((error) => {
        console.log('Ha ocurrido un error' + error.message);
    });
























