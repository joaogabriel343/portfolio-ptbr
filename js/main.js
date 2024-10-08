$("document").ready(function () {
  // ANIMAÇÃO DE "REVELAÇÃO" DE TEXTO.

  /* Guardo na variável "profesion" a etiqueta que contém o texto
ao qual quero aplicar o efeito de revelação. */
  const profesion = baffle(".profesion");

  /* Atribuo à variável "profesión" (que contém o texto que quero animar) os caracteres a serem utilizados para 
a animação do texto revelado (você pode utilizar qualquer tipo de caracteres). Também atribuo a velocidade que o efeito das letras terá */
  profesion.set({
    characters: "█▓▓ ░░>██ ▓█▓>▓ ▓<█ ░<▒░▓ █░<█ █▒> ▓░▓< ▒▓░░",
    speed: 90,
  });

  // Executo o início da animação.
  profesion.start();
  // Estabeleço a duração que a animação terá antes de revelar o texto.
  profesion.reveal(3000);

  var boton = document.getElementById("boton");

  $("#tagline").t({
    beep: false,
    caret: '<span style="color:hotpink;">•</span>',
    typing: function (elm, chr) {
      if (chr.match(/\-trigger/)) $("#pow-txt").show().delay(500).fadeOut(0);
    },
  });

  $("#boton-arriba").click(function () {
    $("body, html").animate(
      {
        scrollTop: "0px",
      },
      300
    );
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $("#boton-arriba").slideDown(300);
    } else {
      $("#boton-arriba").slideUp(300);
    }
  });
});

//
//
//
//
//
//
// Função para gerar caracteres aleatórios
function getRandomChar() {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return chars.charAt(Math.floor(Math.random() * chars.length));
}

// Função para criar o efeito de invasão hacker
function hackerEffect(element) {
  const originalText = element.textContent;
  const length = originalText.length;

  // Substitui o texto original por caracteres aleatórios
  const interval = setInterval(() => {
    const randomText = Array.from({ length }, () => getRandomChar()).join("");
    element.textContent = randomText;
  }, 100);

  // Restaura o texto original após 3 segundos
  setTimeout(() => {
    clearInterval(interval);
    element.textContent = originalText;
  }, 3000);
}

// Seleciona o elemento e aplica o efeito
document.addEventListener("DOMContentLoaded", () => {
  const fadeInText = document.querySelector(".fade-in");
  hackerEffect(fadeInText);
});
