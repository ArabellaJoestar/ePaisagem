function ePaisagem() {
    const imagem = document.getElementById('imagem');
    const estilo = getComputedStyle(imagem);
    const paragrafo = document.getElementById('resultado');

    const altura = estilo.height;
    const alturaNum = parseInt(altura);
    const largura = estilo.width;
    const larguraNum = parseInt(largura);

    if(larguraNum > alturaNum){
        paragrafo.innerText = `Largura vence ${larguraNum}`
    }else if(larguraNum < alturaNum){
        paragrafo.innerText = `Altura vence ${alturaNum}`
    }


}
