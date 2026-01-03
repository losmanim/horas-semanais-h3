// Método 1: Inicialização Automática
Fancybox.bind("[data-fancybox]", {
    // Opções de configuração
    zoom: true,
    slideShow: true,
    thumbnails: {
        autoStart: true
    }
});

// Método 2: Inicialização Manual
const myGallery = new Fancybox([
    { src: "img/PrimeiraSemana.jpeg", thumb: "img/1semana.jpg" },
    { src: "img/SegundaSemana.jpeg", thumb: "img/2semana.jpg" },
    { src: "img/TerceiraSemana.jpeg", thumb: "img/3semana.jpg" },
    { src: "img/QuartaSemana.jpeg", thumb: "img/4semana.jpg" },
    { src: "img/quintaSemana.jpeg", thumb: "img/5semana.jpg" },
    { src: "img/sextaSemana.jpeg", thumb: "img/6semana.jpg" },
    { src: "img/setimaSemana.jpeg", thumb: "img/7semana.jpg" },
    { src: "img/oitavaSemana.jpeg", thumb: "img/8semana.jpg" },
    { src: "img/nonaSemana.jpeg", thumb: "img/9semana.jpg" },
    { src: "img/imgDeTodosLa.jpeg", thumb: "img/10semana.jpg" },
    { src: "img/decimaPrimeiraSemana.jpeg", thumb: "img/11semana.jpg" },
    { src: "img/decimaSegundaSemana.jpeg", thumb: "img/12semana.jpg" },
    { src: "img/decimaTerceiraSemana.jpeg", thumb: "img/13semana.jpg" },
    { src: "img/decimaQuartaSemana.jpeg", thumb: "img/14semana.jpg" },
    { src: "img/decimaQuintaSemana.jpeg", thumb: "img/15semana.jpg" },
    { src: "img/decimaSextaSemana.jpeg", thumb: "img/16semana.jpg" },
    { src: "img/decimaSetimaSemana.jpeg", thumb: "img/17semana.jpg" },
    { src: "img/decimaOitavaSemana.jpeg", thumb: "img/18semana.jpg" },
    { src: "img/decimaNonaSemana.jpeg", thumb: "img/19semana.jpg" },
    { src: "img/imgDeTodosLa.jpeg", thumb: "img/20semana.jpg" },
    { src: "img/decimaPrimeiraSemana.jpeg", thumb: "img/21semana.jpg" }
], {
    // Configurações personalizadas
});
