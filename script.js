
/* ==========================================
   SUZI — ASSISTENTE VIRTUAL
   RAQUEL SUZAN | LASH STUDIO
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {

  const suzi = document.querySelector("#suzi");
  const chat = document.querySelector("#suzi-chat");
  const toggle = document.querySelector("#suzi-toggle");
  const close = document.querySelector("#suzi-close");
  const messages = document.querySelector("#suzi-messages");
  const form = document.querySelector("#suzi-form");
  const input = document.querySelector("#suzi-input");

  // Verifica se os elementos existem
  if (!suzi || !chat) return;

  // Abrir e fechar conversa
  function abrirChat() {
    chat.classList.add("ativo");
    chat.setAttribute("aria-hidden", "false");
  }

  function fecharChat() {
    chat.classList.remove("ativo");
    chat.setAttribute("aria-hidden", "true");
  }

  if (toggle) toggle.addEventListener("click", abrirChat);
  if (suzi) suzi.addEventListener("click", abrirChat);
  if (close) close.addEventListener("click", fecharChat);

  // Adicionar mensagem
  function adicionarMensagem(texto, tipo) {
    const mensagem = document.createElement("div");

    mensagem.className = `mensagem ${tipo}`;
    mensagem.textContent = texto;

    messages.appendChild(mensagem);
    messages.scrollTop = messages.scrollHeight;
  }

  // Respostas da Suzi
  function responder(pergunta) {
    const texto = pergunta.toLowerCase();

    if (texto.includes("oi") ||
        texto.includes("olá") ||
        texto.includes("bom dia") ||
        texto.includes("boa tarde") ||
        texto.includes("boa noite")) {
      return "Oii! 💕 Seja muito bem-vinda ao Raquel Suzan Lash Studio! Como posso te ajudar hoje?";
    }

    if (texto.includes("preço") ||
        texto.includes("valor") ||
        texto.includes("quanto custa")) {
      return "Será um prazer te passar nossos valores! 💗 Me conta qual procedimento você deseja fazer.";
    }

    if (texto.includes("agendar") ||
        texto.includes("horário") ||
        texto.includes("marcar")) {
      return "Oba! ✨ Vamos encontrar um horário perfeito para você. Clique no botão do WhatsApp para conversar sobre seu agendamento!";
    }

    if (texto.includes("cílios") ||
        texto.includes("extensão") ||
        texto.includes("lash")) {
      return "Temos muito carinho em cada detalhe dos nossos procedimentos! 💕 Qual estilo de cílios você gostaria de conhecer?";
    }

    if (texto.includes("endereço") ||
        texto.includes("localização") ||
        texto.includes("onde fica")) {
      return "Claro! 💗 Entre em contato pelo WhatsApp para receber nossa localização.";
    }

    if (texto.includes("obrigada") ||
        texto.includes("obrigado")) {
      return "Imagina, linda! 💕 Será sempre um prazer receber você!";
    }

    return "Adorei sua mensagem! 💗 Para te orientar melhor, me conta um pouquinho mais ou fale diretamente com nossa equipe pelo WhatsApp.";
  }

  // Enviar mensagem
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const pergunta = input.value.trim();

      if (!pergunta) return;

      adicionarMensagem(pergunta, "mensagem-cliente");

      input.value = "";

      setTimeout(() => {
        adicionarMensagem(responder(pergunta), "mensagem-suzi");
      }, 900);
    });
  }

  // Mensagem inicial
  if (messages && messages.children.length === 0) {
    adicionarMensagem(
      "Oii, linda! 💕 Eu sou a Suzi, sua assistente virtual. Estou aqui para ajudar você!",
      "mensagem-suzi"
    );
  }

  // Animação de entrada
  suzi.classList.add("suzi-animada");

});
