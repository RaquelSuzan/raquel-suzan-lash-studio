
const suziLauncher = document.getElementById("suziLauncher");
const suziPanel = document.getElementById("suziPanel");
const suziClose = document.getElementById("suziClose");
const suziForm = document.getElementById("suziForm");
const suziInput = document.getElementById("suziInput");
const suziMessages = document.getElementById("suziMessages");

const whatsapp = "555193852951";

function abrirSuzi() {
  suziPanel.classList.add("open");
  suziInput.focus();
}

function fecharSuzi() {
  suziPanel.classList.remove("open");
}

suziLauncher.addEventListener("click", abrirSuzi);
suziClose.addEventListener("click", fecharSuzi);

function adicionarMensagem(texto, tipo) {
  const mensagem = document.createElement("div");
  mensagem.className = `suzi-msg ${tipo}`;
  mensagem.textContent = texto;
  suziMessages.appendChild(mensagem);
  suziMessages.scrollTop = suziMessages.scrollHeight;
}

function responderSuzi(texto) {
  const mensagem = texto.toLowerCase();

  if (
    mensagem.includes("oi") ||
    mensagem.includes("olá") ||
    mensagem.includes("ola") ||
    mensagem.includes("bom dia") ||
    mensagem.includes("boa tarde") ||
    mensagem.includes("boa noite")
  ) {
    return "Oii! Seja muito bem-vinda ao Raquel Suzan Lash Studio! 💗 Eu sou a Suzi e estou aqui para ajudar você. O que gostaria de saber?";
  }

  if (
    mensagem.includes("serviço") ||
    mensagem.includes("servicos") ||
    mensagem.includes("cílios") ||
    mensagem.includes("cilios") ||
    mensagem.includes("procedimento")
  ) {
    return "Temos serviços de extensão de cílios, manutenção e design personalizado! ✨ Para saber qual combina mais com você, fale diretamente com a Raquel pelo WhatsApp.";
  }

  if (
    mensagem.includes("valor") ||
    mensagem.includes("preço") ||
    mensagem.includes("preco") ||
    mensagem.includes("quanto custa") ||
    mensagem.includes("quanto é")
  ) {
    return "Claro, linda! 💕 Para consultar os valores atualizados dos procedimentos, vou te encaminhar diretamente para a Raquel. Assim você recebe todas as informações certinhas!";
  }

  if (
    mensagem.includes("agendar") ||
    mensagem.includes("agenda") ||
    mensagem.includes("horário") ||
    mensagem.includes("horario") ||
    mensagem.includes("marcar")
  ) {
    return "Obaaa! 💗 Vamos deixar esse olhar ainda mais lindo! Para verificar os horários disponíveis e confirmar seu agendamento, clique no botão do WhatsApp aqui embaixo.";
  }

  if (
    mensagem.includes("manutenção") ||
    mensagem.includes("manutencao")
  ) {
    return "A manutenção ajuda a conservar o resultado da extensão de cílios. ✨ A Raquel pode orientar você sobre o intervalo ideal de acordo com seu procedimento.";
  }

  if (
    mensagem.includes("endereço") ||
    mensagem.includes("endereco") ||
    mensagem.includes("localização") ||
    mensagem.includes("localizacao") ||
    mensagem.includes("onde fica")
  ) {
    return "Para receber o endereço e as informações de localização do estúdio, fale com a Raquel pelo WhatsApp. 💗";
  }

  if (
    mensagem.includes("obrigada") ||
    mensagem.includes("obrigado") ||
    mensagem.includes("valeu")
  ) {
    return "Por nada, linda! 💕 Foi um prazer ajudar. Quando precisar, estarei por aqui!";
  }

  return "Que bom receber sua mensagem! 💗 Ainda estou aprendendo, mas a Raquel pode ajudar você com essa dúvida. Clique no botão do WhatsApp para conversar diretamente com ela!";
}

function enviarParaWhatsApp() {
  const texto = encodeURIComponent(
    "Olá, Raquel! Vim pelo site e gostaria de mais informações."
  );

  window.open(
    `https://wa.me/${whatsapp}?text=${texto}`,
    "_blank"
  );
}

function enviarMensagem(texto) {
  const mensagem = texto.trim();

  if (!mensagem) return;

  adicionarMensagem(mensagem, "user");
  suziInput.value = "";

  setTimeout(() => {
    const resposta = responderSuzi(mensagem);
    adicionarMensagem(resposta, "bot");

    const mensagemLower = mensagem.toLowerCase();

    if (
      mensagemLower.includes("valor") ||
      mensagemLower.includes("preço") ||
      mensagemLower.includes("preco") ||
      mensagemLower.includes("quanto custa") ||
      mensagemLower.includes("quanto é") ||
      mensagemLower.includes("agendar") ||
      mensagemLower.includes("horário") ||
      mensagemLower.includes("horario") ||
      mensagemLower.includes("marcar") ||
      mensagemLower.includes("endereço") ||
      mensagemLower.includes("endereco")
    ) {
      const botao = document.createElement("button");
      botao.textContent = "Conversar com a Raquel no WhatsApp";
      botao.className = "suzi-quick-button";
      botao.style.cssText =
        "margin:5px 0 5px 10px;padding:10px 13px;border:0;border-radius:20px;background:#713a4b;color:white;font-size:11px;cursor:pointer;";

      botao.addEventListener("click", enviarParaWhatsApp);
      suziMessages.appendChild(botao);
      suziMessages.scrollTop = suziMessages.scrollHeight;
    }
  }, 650);
}

suziForm.addEventListener("submit", function(event) {
  event.preventDefault();
  enviarMensagem(suziInput.value);
});

document.querySelectorAll(".suzi-quick button").forEach(botao => {
  botao.addEventListener("click", function() {
    enviarMensagem(this.dataset.msg);
  });
});
