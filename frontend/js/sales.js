document.addEventListener('DOMContentLoaded', function() {
    const salesForm = document.getElementById('salesForm');
    const salesItems = document.getElementById('salesItems');

    // Handle sales form submission
    if (salesForm) {
        salesForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(salesForm);
            const productName = formData.get('productName');
            const quantity = formData.get('quantity');
            const price = formData.get('price');

            // Add sale to the list
            const listItem = document.createElement('li');
            listItem.textContent = `Produto: ${productName}, Quantidade: ${quantity}, Preço: ${price}`;
            salesItems.appendChild(listItem);

            // Optionally, send the sale data to the backend
            // fetch('https://frontend-cwq0ljca2-vitor-henriques-projects-81f90ab4.vercel.app/api/sales', {
            //     method: 'POST',
            //     body: formData
            // })
            // .then(response => response.json())
            // .then(data => {
            //     if (data.success) {
            //         alert('Venda registrada com sucesso!');
            //     } else {
            //         alert('Falha ao registrar venda: ' + data.message);
            //     }
            // })
            // .catch(error => console.error('Erro:', error));
        });
    }
});
