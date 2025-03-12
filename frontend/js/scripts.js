document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const paymentForm = document.getElementById('paymentForm');
    const adminForm = document.getElementById('adminForm');
    const userActions = document.getElementById('userActions');
    const addUserBtn = document.getElementById('addUserBtn');
    const searchAccountsBtn = document.getElementById('searchAccountsBtn');

    // Handle login form submission
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(loginForm);
            fetch('https://cintiaproject-ja56-k9ycrxsxc-vitor-henriques-projects-81f90ab4.vercel.app/api/login', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Login bem-sucedido!');
                    loginForm.style.display = 'none';
                    adminForm.style.display = 'none';
                    userActions.style.display = 'flex';
                } else {
                    alert('Falha no login: ' + data.message);
                }
            })
            .catch(error => console.error('Erro:', error));
        });
    }

    // Handle payment form submission
    if (paymentForm) {
        paymentForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(paymentForm);
            fetch('https://cintiaproject-ja56-k9ycrxsxc-vitor-henriques-projects-81f90ab4.vercel.app/api/payments', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Pagamento registrado com sucesso!');
                    // Update UI or reset form as needed
                } else {
                    alert('Falha no pagamento: ' + data.message);
                }
            })
            .catch(error => console.error('Erro:', error));
        });
    }

    // Handle admin form submission
    if (adminForm) {
        adminForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(adminForm);
            fetch('https://cintiaproject-ja56-k9ycrxsxc-vitor-henriques-projects-81f90ab4.vercel.app/api/admins', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Administrador registrado com sucesso!');
                    // Update UI or reset form as needed
                } else {
                    alert('Falha no registro do administrador: ' + data.message);
                }
            })
            .catch(error => console.error('Erro:', error));
        });
    }

    // Handle add user button click
    if (addUserBtn) {
        addUserBtn.addEventListener('click', function() {
            // Redirecionar para a página de controle do usuário sobre as vendas
            window.location.href = 'user-control.html';
        });
    }

    // Handle search accounts button click
    if (searchAccountsBtn) {
        searchAccountsBtn.addEventListener('click', function() {
            alert('Pesquisar Contas em Aberto - Funcionalidade em desenvolvimento');
        });
    }
});