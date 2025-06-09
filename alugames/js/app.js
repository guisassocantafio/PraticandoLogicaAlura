function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name').textContent;

    if (imagem.classList.contains('dashboard__item__img--rented')){
        
        let confirmacao = window.confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo}?`);

        if(confirmacao) {
            console.log(`O Jogo ${nomeJogo} foi devolvido com sucesso.` );
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return')
            botao.textContent = 'Alugar';

        } else {
            console.log(`A devolução do jogo ${nomeJogo} foi cancelada.` );
        }

    } 
    else{
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return')
        botao.textContent = 'Devolver';

    }
}