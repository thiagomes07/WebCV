document.documentElement.style.setProperty(
  "--main-height",
  `${
    document.querySelector("body").offsetHeight -
    document.querySelector("header").offsetHeight
  }px`
);

console.log("Quando for imprimir para salvar em .pdf, ativar a opção de 'Gráficos em segundo plano'")