// Actualizar carrito de compras

var numProductos = 0;
var numProducto1 = 0;
var numProducto2 = 0;
const btnProducto1 = document.getElementById('anadirproducto1');
const btnProducto2 = document.getElementById('anadirproducto2');
const etiquetaNumProducto = document.getElementById('numCarrito');
const modalBody = document.querySelector('.modal-body');

btnProducto1.addEventListener('click', (e)=> {
    e.preventDefault();
    alert("Paracetamol-Capsule-500mg añadido al carrito de ventas");
    numProductos = numProductos + 1;
    etiquetaNumProducto.innerHTML = numProductos;
    modalBody.innerHTML += '<div class="lista-carrito"> <h2>Paracetamol-Capsule-500mg</h2> <i>$ 25.000</i> </div>'
});

btnProducto2.addEventListener('click', (e)=> {
    e.preventDefault();
    alert("Dolex Forte añadido al carrito de ventas");
    numProductos = numProductos + 1;
    etiquetaNumProducto.innerHTML = numProductos;
    modalBody.innerHTML += '<div class="lista-carrito"> <h2>Dolex Forte</h2> <i>$ 10.000</i> </div>'
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