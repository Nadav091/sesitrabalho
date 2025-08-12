function showPassword() {
    const senhaInput = document.getElementById("senha");
    const eyeIcon = document.getElementById("eye");
    
    if (senhaInput.type === "password") {
        senhaInput.type = "text";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    } else {
        senhaInput.type = "password";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    }
}

function login() {
    const nome = document.getElementById("nome").value;
    const senha = document.getElementById("senha").value;

    // Exemplo de credencial fixa (substitua por lógica real depois)
    if (nome === "admin" && senha === "1234") {
        alert("Login bem-sucedido!");
    } else {
        document.getElementById("error-modal").style.display = "block";
    }
}

function fecharError() {
    document.getElementById("error-modal").style.display = "none";
}

function showPassword() {
    const senhaInput = document.getElementById("senha");
    const eyeIcon = document.getElementById("eye");

    if (senhaInput.type === "password") {
        senhaInput.type = "text";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    } else {
        senhaInput.type = "password";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    }
}

function login() {
    const nome = document.getElementById("nome").value;
    const senha = document.getElementById("senha").value;

    if (nome === "admin" && senha === "1234") {
        alert("Login bem-sucedido!");
    } else {
        document.getElementById("error-modal").style.display = "block";
    }
}

function fecharError() {
    document.getElementById("error-modal").style.display = "none";
}

function registrar() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if (nome && email && senha) {
        alert("Cadastro realizado com sucesso!");
        window.location.href = "index.html";
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

function login() {
    const nome = document.getElementById("nome").value;
    const senha = document.getElementById("senha").value;

    if (nome === "Nadav" && senha === "1234") {
        // Redireciona para a loja
        window.location.href = "loja/loja.html";
    } else {
        // Mostra mensagem de erro
        document.getElementById("error-modal").style.display = "block";
    }
}

function fecharError() {
    document.getElementById("error-modal").style.display = "none";
}

function showPassword() {
    const senhaInput = document.getElementById("senha");
    const eyeIcon = document.getElementById("eye");

    if (senhaInput.type === "password") {
        senhaInput.type = "text";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    } else {
        senhaInput.type = "password";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    }
}