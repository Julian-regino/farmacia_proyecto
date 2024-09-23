// Actualizar carrito de compras

var numProductos = 0;
const btnProducto1 = document.getElementById('anadirproducto1');
const btnProducto2 = document.getElementById('anadirproducto2');
const etiquetaNumProducto = document.getElementById('numCarrito');

btnProducto1.addEventListener('click', (e)=> {
    e.preventDefault();
    alert("Paracetamol-Capsule-500mg añadido al carrito de ventas");
    numProductos = numProductos + 1;
    etiquetaNumProducto.innerHTML = numProductos;
});

btnProducto2.addEventListener('click', (e)=> {
    e.preventDefault();
    alert("Dolex Forte añadido al carrito de ventas");
    numProductos = numProductos + 1;
    etiquetaNumProducto.innerHTML = numProductos;
});


// Ver carrito de compras
const openModalCarrito = document.getElementById('openModalCarrito');
const modalCarrtito = document.querySelector('.modal-carrito');
const btnCerrarModalCarro = document.getElementById('btnCerrarModalCarro');

openModalCarrito.addEventListener('click', (e)=> {
    e.preventDefault();
    modalCarrtito.classList.add('modal-show')
});

btnCerrarModalCarro.addEventListener('click', (e)=> {
    e.preventDefault();
    modalCarrtito.classList.remove('modal-show');
});