
const formulario = document.getElementById("loginForm");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;

    if (email === "" || senha === "") {
        mensagem.textContent = "Preencha todos os campos!";
        mensagem.style.color = "red";
        return;
    }

    mensagem.textContent =
        "Login demonstrativo realizado! Bem-vindo ao LingoWorld! 🌎";

    mensagem.style.color = "green";

    setTimeout(function() {
        window.location.href = "index.html";
    }, 1500);
});

const cadastroLink = document.getElementById("cadastroLink");

cadastroLink.addEventListener("click", function(event) {
    event.preventDefault();

    mensagem.textContent =
        "A página de cadastro será criada em breve! ✨";

    mensagem.style.color = "#6554d9";
});

