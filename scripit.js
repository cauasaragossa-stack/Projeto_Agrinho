// --- FUNCIONALIDADE: ALTERNAR TEMA (Modo Claro/Escuro) ---
const temaBtn = document.getElementById('temaBtn');

temaBtn.addEventListener('click', () => {
    // Adiciona ou remove a classe 'dark-theme' do elemento <body>
    document.body.classList.toggle('dark-theme');
    
    // Atualiza o texto interno do botão dependendo do modo ativo
    if (document.body.classList.contains('dark-theme')) {
        temaBtn.innerHTML = '☀️ Modo Claro';
    } else {
        temaBtn.innerHTML = '🌙 Modo Escuro';
    }
});


// --- FUNCIONALIDADE: CONTADOR DE PONTOS SUSTENTÁVEIS ---
let pontuacao = 0;
const pontosElemento = document.getElementById('pontos');

function ganharPonto() {
    pontuacao += 10; // Adiciona 10 pontos por clique
    pontosElemento.textContent = pontuacao;
    
    // Feedback visual animado (efeito pulso rápido)
    pontosElemento.style.transform = 'scale(1.2)';
    pontosElemento.style.transition = 'transform 0.1s ease';
    setTimeout(() => {
        pontosElemento.style.transform = 'scale(1)';
    }, 100);
}


// --- FUNCIONALIDADE: QUIZ SUSTENTÁVEL ---
function verificarResposta(isCorrect) {
    const resultadoElemento = document.getElementById('resultado');
    
    if (isCorrect) {
        resultadoElemento.textContent = "🎉 Correto! Reciclar reduz a extração de matéria-prima e evita o acúmulo em aterros.";
        resultadoElemento.className = "correto"; // Aplica estilo verde correto do CSS
        
        // Recompensa o usuário chamando a função de pontos
        ganharPonto();
    } else {
        resultadoElemento.textContent = "❌ Incorreto. Jogar tudo no lixo comum gera poluição e desperdiça recursos. Tente novamente!";
        resultadoElemento.className = "errado"; // Aplica estilo vermelho de erro do CSS
    }
}