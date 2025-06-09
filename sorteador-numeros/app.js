function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let num;

    for (let i = 0; i<quantidade; i++){
        num = numAleatorio(de,ate);
        sorteados.push(num);
    }

    alert(sorteados);
}

function numAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1))+min;

}
