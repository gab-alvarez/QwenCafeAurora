document.addEventListener("DOMContentLoaded", function () {
    const filtroInput = document.getElementById("filtro");
    const listaProductos = document.getElementById("listaProductos");
    const btnAgregar = document.getElementById("btnAgregar");
    const seccionAgregar = document.getElementById("seccionAgregar");
    const btnGuardarNuevo = document.getElementById("btnGuardarNuevo");

    // Filtrar productos
    filtroInput.addEventListener("input", function () {
        const texto = this.value.toLowerCase();
        const items = listaProductos.getElementsByTagName("li");

        Array.from(items).forEach(item => {
            const nombre = item.getAttribute("data-nombre").toLowerCase();
            item.style.display = nombre.includes(texto) ? "flex" : "none";
        });
    });

    // Mostrar formulario de agregar
    btnAgregar.addEventListener("click", function () {
        seccionAgregar.classList.remove("hidden");
    });

    // Guardar nuevo producto
    btnGuardarNuevo.addEventListener("click", function () {
        const nombre = document.getElementById("nombreProducto").value.trim();
        const precio = document.getElementById("precioProducto").value.trim();

        if (!nombre || !precio || isNaN(precio)) {
            alert("Por favor ingresa datos válidos.");
            return;
        }

        const li = document.createElement("li");
        li.setAttribute("data-nombre", nombre);

        li.innerHTML = `
            <input type="checkbox" class="producto-check"/>
            <span>${nombre}</span> - $${parseFloat(precio).toFixed(2)}
            <button class="btnModificar">Modificar</button>
            <button class="btnQuitar">Quitar</button>
        `;
        listaProductos.appendChild(li);

        // Limpiar campos
        document.getElementById("nombreProducto").value = "";
        document.getElementById("precioProducto").value = "";

        // Ocultar formulario
        seccionAgregar.classList.add("hidden");

        // Asignar eventos a nuevos botones
        asignarEventosBotones(li);
        actualizarContador();
    });

    // Eliminar o modificar producto
    function asignarEventosBotones(li) {
        // Quitar
        li.querySelector(".btnQuitar").addEventListener("click", () => {
            li.remove();
            actualizarContador();
        });

        // Modificar
        li.querySelector(".btnModificar").addEventListener("click", () => {
            const spanPrecio = li.childNodes[3]; // El nodo de texto "$3.50"
            const actualPrecio = parseFloat(spanPrecio.textContent.replace('$', ''));

            const nuevoPrecio = prompt("Ingresa el nuevo precio:", actualPrecio);
            if (nuevoPrecio && !isNaN(nuevoPrecio)) {
                spanPrecio.textContent = ` - $${parseFloat(nuevoPrecio).toFixed(2)}`;
            }
        });

        // Contador al checkbox
        li.querySelector(".producto-check").addEventListener("change", () => {
            actualizarContador();
        });
    }

    // Inicializar contadores y eventos
    document.querySelectorAll("li").forEach(asignarEventosBotones);
});