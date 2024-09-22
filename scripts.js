

document.addEventListener('DOMContentLoaded', () => {
    const productForm = document.getElementById('product-form');
    const inventoryTableBody = document.querySelector('#inventory-table tbody');
    
    // Otro código...

    productForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Capturar los valores del formulario
        const name = document.getElementById('product-name').value;
        const stock = parseInt(document.getElementById('product-stock').value);
        const price = parseFloat(document.getElementById('product-price').value);

        // Crear una fila de la tabla con los datos del producto
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${name}</td>
            <td>${stock}</td>
            <td>${price}</td>
            <td>
                <button onclick="addToCart()">Agregar al Carrito</button>
            </td>
        `;

        // Agregar la fila a la tabla del inventario
        inventoryTableBody.appendChild(row);

        // Limpiar el formulario
        productForm.reset();
    });

    // Otro código...
});

"scripts" :{

"start" : "npx http-server -o"

}
