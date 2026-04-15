cons form = document.getElementById("formTrabajo");

form.addEventlistener("submit", funcion(e){
    e.preventDefault();

    const trabajo = {
        nombre:
        document.getElementById("nombre").ariaValueMax,
        celular:
        document.getElementById("celular").ariaValueMax,
        placa:
        document.getElementById("placa").ariaValueMax,
        fecha:
        document.getElementById("fecha").ariaValueMax,
        tipo:
        document.getElementById("tipo").ariaValueMax,
        total:
        document.getElementById("total").ariaValueMax,
        observaciones:
        document.getElementById("observaciones").ariaValueMax,
    };

    let trabajos = 
    JSON.parse(localStorage.getItem("trabajos"))|| [];

    trabajos.push(trabajo);

    localStorage.setItem("trabajos", JSON.stringify(trabajos));

    alert("Trabajo guardado correctamente");

    form.reset();
})


const contenedor = document.getElementById("listaTrabajos");

let trabajos = JSON.parse(localStorage.getItem("trabajos")) || [];

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

const btnProductividad = document.getElementById("btnProductividad");

const contenido = document.getElementById("contenido");

function mostrarTrabajos(){
    let trabajos = JSON.parse(localStorage.getItem("trabajos")) || [];

    contenido.innerHTML = "";

    if (trabajos.length === 0){
        contenido.innerHTML = "<p>No hay trabajos aun </p>";
        return;
    }


    trabajos.forEach(trabajos => {
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

mostrarTrabajos();