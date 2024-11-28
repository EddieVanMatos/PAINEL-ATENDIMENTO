// Navegação e funcionalidades principais
document.addEventListener("DOMContentLoaded", () => {
    // Atualizações de conteúdo dinâmico e navegação
    console.log("Painel de atendimento carregado.");
});
  // Inicializa o carrossel
  $('#videoCarousel').owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    nav: false,
    dots: false,
});

let filaSenhas = gerarSenhas(10);
let senhaAtual = null;
let ultimasSenhas = [];

// Função para gerar um conjunto de senhas
function gerarSenhas(qtd) {
    let senhas = [];
    for (let i = 1; i <= qtd; i++) {
        senhas.push(`A${String(i).padStart(3, '0')}`);
    }
    return senhas;
}

// Função para chamar a próxima senha
document.getElementById('btn-chamar-senha').addEventListener('click', () => {
    if (filaSenhas.length > 0) {
        senhaAtual = filaSenhas.shift();
        document.getElementById('senha-atual').textContent = senhaAtual;
        document.getElementById('proxima-senha').textContent = filaSenhas[0] || 'Aguardando...';

        ultimasSenhas.unshift(senhaAtual);
        atualizarUltimasSenhas();

        if (filaSenhas.length === 0) {
            filaSenhas = gerarSenhas(10);
        }
    } else {
        alert('Nenhuma senha disponível no momento!');
    }
});

// Atualiza a lista de últimas senhas chamadas
function atualizarUltimasSenhas() {
    const lista = document.getElementById('lista-ultimas-senhas');
    lista.innerHTML = '';
    ultimasSenhas.slice(0, 5).forEach(senha => {
        const li = document.createElement('li');
        li.textContent = `Senha ${senha}`;
        lista.appendChild(li);
    });
}

// Exibe a data e hora em tempo real
function atualizarHora() {
    const dataAtual = new Date();
    document.getElementById('current-date').textContent = dataAtual.toLocaleDateString();
    document.getElementById('current-time').textContent = dataAtual.toLocaleTimeString();
}

setInterval(atualizarHora, 1000);