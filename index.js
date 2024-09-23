var numProductos = 0;
const btnProducto1 = document.getElementById("anadirproducto1");

btnProducto1.addEventListener('click', (e)=> {
    e.preventDefault();
    alert("Paracetamol-Capsule-500mg añadido al carrito de ventas");
})

function actualizarNumProductos() {
    
}

setInterval(actualizarNumProductos, 500);