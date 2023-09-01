const Producto = function(nombre,stock,precio){
    this.nombre = nombre 
    this.stock = stock
    this.precio = precio
}

let producto1 = new Producto("Mini Bag Katya negra tramada, 20, 9668")
let producto2 = new Producto("Mini Bag Katya black lisa, 10, 9668")
let producto3 = new Producto("Mini Bag Katya rosa nude, 7, 9700")
let producto4 = new Producto("Mini Tote Moon charol negro, 15, 7800")
let producto5 = new Producto("Mini Tote Moon gamuza, 20, 7900")
let producto6 = new Producto("Mini Tote Moon charol gris, 15, 7800")
let producto7 = new Producto("Gigi Bag blanca, 10, 12870")
let producto8 = new Producto("Bandolera Bella negra, 20, 11797")
let producto9 = new Producto("Bandolera Bella natural, 15, 11797")
let producto10 = new Producto("Bandolera Bella azul, 10, 11797")

let lista = [producto1,producto2,producto3,producto4,producto5,producto6,producto7,producto8,producto9,producto10]

if(localStorage.getItem("Productos")){
    lista = JSON.parse(localStorage.getItem("Productos"));
}else{
    lista = lista
}

function BuscarProductos(){
    const body = document.querySelector('body');

    const input = document.getElementById('buscarP').value 

    const palabreClave = input.trim().toUpperCase();

    const resultado = lista.filter((producto) => producto.nombre.toUpperCase().includes(palabraclave));

    if (resultado.length > 0){
        const container = document.createElement('div');
        Clipboard.classList.add('card-container');

        resultado.forEach((producto) => {
            const card = document.createElement('div');
            card.classList.add('card');

            const nombre = document.createElement('h2');
            nombre.textContent = producto.nombre;
            card.appendChild(nombre);

            const stock = document.createElement('p');
            stock.textContent = 'Stock: ${producto.stock}'; 
            card.appendChild(stock);

            const precio = document.createElement('p');
            precio.textContent = 'Precio: ${producto.precio}';

            container.appendChild(card);
        });

        body.appendChild(container);
    }else{
        alert('Producto no encontrado')
    }    
}