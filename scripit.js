let pontos = 0;

function ganharPonto() {
    pontos++;
    document.getElementById("pontos").textContent = pontos;
}

function verificarResposta(correta) {

    const resultado =
        document.getElementById("resultado");

    if(correta){
        resultado.textContent =
        "✅ Correto! Reciclar reduz resíduos.";
        resultado.style.color = "green";
    } else{
        resultado.textContent =
        "❌ Tente novamente.";
        resultado.style.color = "red";
    }
}

const temaBtn =
document.getElementById("temaBtn");

temaBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        temaBtn.textContent = "☀️ Modo Claro";
    } else{
        temaBtn.textContent = "🌙 Modo Escuro";
    }
});