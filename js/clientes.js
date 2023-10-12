const listaClientes = document.getElementById('lista-clientes');

fetch("./datos/clientes.json")
    .then(response => response.json())
    .then(data => {
        mostrarClientes(data);
    })
    .catch(error => {
        console.error('Error al cargar los datos', error);
    });

function mostrarClientes(clientes) {
    const listaClientes = document.getElementById("lista-clientes");

    // Dividir clientes en grupos de 3 para crear filas
    for (let i = 0; i < clientes.length; i += 3) {
        const row = document.createElement("div");
        row.classList.add("row");

        // Crear columnas para cada cliente en el grupo
        for (let j = i; j < i + 3 && j < clientes.length; j++) {
            const cliente = clientes[j];

            const col = document.createElement("div");
            col.classList.add("col");

            const card = document.createElement("div");
            card.classList.add("card");

            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");

            cardBody.innerHTML = `
                    <h5 class="card-title">${cliente.nombre}</h5>
                    <p class="card-text">${cliente.comentario}</p>
                    <img src="${cliente.foto}" alt="${cliente.nombre}" class="card-img-top" style="width: 100px; height: 100px;">
                `;

            card.appendChild(cardBody);
            col.appendChild(card);
            row.appendChild(col);
        }

        listaClientes.appendChild(row);
    }
}
