let trabajos = JSON.parse(localStorage.getItem("trabajos")) || [];

const form = document.getElementById("formTrabajo");

form.addEventListener("submit", function(e){
    e.preventDefault();

    trabajos.push(trabajo);

    const trabajo = {
        nombre:
        document.getElementById("nombre").value,
        celular:
        document.getElementById("celular").value,
        placa:
        document.getElementById("placa").value,
        fecha:
        document.getElementById("fecha").value,
        tipo:
        document.getElementById("tipo").value,
        total:
        document.getElementById("total").value,
        observaciones:
        document.getElementById("observaciones").value,
    };



    let trabajos = 
    JSON.parse(localStorage.getItem("trabajos"))|| [];

    trabajos.push(trabajo);

    localStorage.setItem("trabajos", JSON.stringify(trabajos));

    alert("Trabajo guardado correctamente");

    form.reset();

    mostrarTrabajos();
})


const contenedor = document.getElementById("listaTrabajos");



contenedor.innerHTML = "";

trabajos.forEach(trabajo =>{
    const div = document.createElement("div");

    div.innerHTML = `
    <h3>${trabajo.nombre}</h3>
    <p>${trabajo.celular}</p>
    <p>${trabajo.placa}</p>
    <p>${trabajo.fecha}</p>
    <p>${trabajo.tipo}</p>
    <p>$${trabajo.total}</p>
    <p>${trabajo.observaciones}</p>
    
    <hr>
    
`;

contenedor.appendChild(div);
});


let total = trabajos.reduce((acc,trabajo) => acc + Number(trabajo.total), 0);
console.log("total ganado", total);


const btnTrabajos = document.getElementById("btnTrabajos");
btnTrabajos.addEventListener("click", mostrarTrabajos);

const btnProductividad = document.getElementById("btnProductividad");
btnProductividad.addEventListener("click",mostrarProductividad);

const contenido = document.getElementById("contenido");

function mostrarTrabajos(){
    let trabajos = JSON.parse(localStorage.getItem("trabajos")) || [];j

    contenido.innerHTML = "";

    if (trabajos.length === 0){
        contenido.innerHTML = "<p>No hay trabajos aun </p>";
        return;
    }


    trabajos.forEach(trabajo => {
        contenido.innerHTML += `
        <div>
        <h3>${trabajo.nombre}</h3>
        <p>${trabajo.celular}</p>
        <p>${trabajo.placa}</p>
        <p>${trabajo.fecha}</p>
        <p>${trabajo.tipo}</p>
        <p>$${trabajo.total}</p>
        <p>${trabajo.observaciones}</p>
    <hr>
    </div>`;
    });
}

function mostrarProductividad(){
    let trabajos = JSON.parse(localStorage.getItem("trabajos")) || [] ;

    let total = trabajos.reduce((acc, trabajo) => acc + Number(trabajo.total), 0);


    contenido.innerHTML = `
    <h2>total generado</h2>
    <p>$${total}</p>`;
}

