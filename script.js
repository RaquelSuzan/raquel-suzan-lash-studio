document.addEventListener("DOMContentLoaded", () => {

  // Animações ao aparecer na tela
  const elementos = document.querySelectorAll(
    ".reveal, .fade-in, .animate"
  );

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15
    });

    elementos.forEach((elemento) => {
      observer.observe(elemento);
    });
  } else {
    elementos.forEach((elemento) => {
      elemento.classList.add("visible");
    });
  }

  // Botão de agendamento pelo WhatsApp
  const botoesWhatsApp = document.querySelectorAll(
    ".whatsapp, .btn-whatsapp, [data-whatsapp]"
  );

  const telefone = "55SEUDDDSEUNUMERO";

  const mensagem = encodeURIComponent(
    "Olá! Conheci seu trabalho pelo site da Suzan Lash Studio e gostaria de agendar um horário. 💖"
  );

  botoesWhatsApp.forEach((botao) => {
    botao.addEventListener("click", (event) => {
      event.preventDefault();

      if (telefone === "55SEUDDDSEUNUMERO") {
        alert("O WhatsApp ainda precisa ser configurado.");
        return;
      }

      window.open(
        https://wa.me/${telefone}?text=${mensagem},
        "_blank"
      );
    });
  });

  // Menu mobile
  const menu = document.querySelector(".menu-toggle");
  const navegacao = document.querySelector(".nav-links");

  if (menu && navegacao) {
    menu.addEventListener("click", () => {
      navegacao.classList.toggle("active");
      menu.classList.toggle("active");
    });
  }

  // Fechar menu ao clicar em um link
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navegacao?.classList.remove("active");
      menu?.classList.remove("active");
    });
  });

});
