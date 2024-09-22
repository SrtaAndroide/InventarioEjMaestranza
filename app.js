document.addEventListener('DOMContentLoaded', () => {
    const productForm = document.getElementById('product-form');
    const inventoryTableBody = document.querySelector('#inventory-table tbody');

    const products = JSON.parse(localStorage.getItem('products')) || [];

    const renderProducts = () => {
        inventoryTableBody.innerHTML = ''; // Limpiamos la tabla antes de renderizar los productos
        products.forEach((product, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${product.name}</td>
                <td>${product.stock}</td>
                <td>${product.price}</td>
                <td>
                    <button onclick="updateStock(${index}, 1)">Añadir Stock</button>
                    <button onclick="updateStock(${index}, -1)">Quitar Stock</button>
                    <button onclick="deleteProduct(${index})">Eliminar</button>
                    <button onclick="addToStore(${index})">Agregar a la Vitrina</button>
                </td>
            `;
            inventoryTableBody.appendChild(row); // Agregamos la fila a la tabla del inventario
        });
    };
    

    const saveProducts = () => {
        localStorage.setItem('products', JSON.stringify(products));
        renderProducts();
    };

    productForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Capturar los valores del formulario
        const name = document.getElementById('product-name').value;
        const stock = parseInt(document.getElementById('product-stock').value);
        const price = parseFloat(document.getElementById('product-price').value);

        // Agregar el nuevo producto al array de productos
        products.push({ name, stock, price });

        // Guardar los productos en el almacenamiento local y renderizar la tabla del inventario
        saveProducts();

        // Limpiar el formulario
        productForm.reset();
    });

    renderProducts(); // Renderizar los productos al cargar la página
});
