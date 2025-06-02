// Función para contar checkboxes seleccionados
function actualizarContador() {
    const checkboxes = document.querySelectorAll('.producto-check');
    let count = 0;
    checkboxes.forEach(chk => {
        if (chk.checked) count++;
    });
    document.getElementById('contadorSeleccionados').textContent = `Productos seleccionados: ${count}`;
}