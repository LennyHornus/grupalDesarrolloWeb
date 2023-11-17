const reservasCargadas = JSON.parse(sessionStorage.getItem('reservasCargadas')); // Traigo las reservas existentes
const divContainer = document.querySelector('#container') // Selecciono el div container del dom


const definirFoto = (titulo)=>{
    switch(titulo) {          //  Asigno con un switch, al elemento HTML correspondiente la imagen
        case "Chalten Suites Hotel":
            return `<img src="../assets/4to plantas 2.jpg" class="card-img-top my-3" alt="Card 6"></img>`;
        case "Falls Iguazu, Iguazu.":
            return `<img src="../assets/iguazu4to.png" class="card-img-top my-3" alt="Card 6"></img>`;
            break;
        case "Altitud 720, VGB":
            return `<img src="../assets/4to vgb 2.jpg" class="card-img-top my-3" alt="Card 6"></img>`;
        case "Xelena Hotel, Calafate":
            return `<img src="../assets/Calafate 4to.jpg" class="card-img-top my-3" alt="Card 5"></img>`;
        case "Lilay Suites, Bariloche.":
            return `<img src="../assets/4to bariloche 2.jpg" class="card-img-top my-3" alt="Card 5"></img>`;
        case "Arakur Ushuaia":
            return `<img src="../assets/4to Ushuaia.jpg" class="card-img-top my-3" alt="Card 6"></img>`;
    }
}

if (reservasCargadas) {
    // Si existen reservas previas las cargo en el div html con el contenido y formato correspondientes
    reservasCargadas.forEach((reserva,i) => {   
        divContainer.innerHTML += 
        `
        <div class="card col-sm-4 mx-auto" id="card" style="width: 18rem;" id="${i}">
            <div class="card-body tx my-3" id="container">
                <h5 class="card-title" id="card-titulo"> ${reserva.lugarDestino} </h5>
                ${definirFoto(reserva.lugarDestino)}
                <p class="card-text">Nombre: ${reserva.nombre}</p>
                <p class="card-text">Teléfono: ${reserva.telefono}</p>
                <p class="card-text">Email: ${reserva.email}</p>
                <p class="card-text">Personas: ${reserva.personas}</p>
                <p class="card-text">Método de pago: ${reserva.metodoPago}</p>
            </div>
        </div>
        `             
    })
} else{
    divContainer.innerHTML += 
    `
    <p class="carritoVacio">El carrito está vacío</p>
    `
}