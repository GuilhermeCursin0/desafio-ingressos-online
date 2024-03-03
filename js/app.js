let listaIngresso = {
    pista: 100,
    superior: 200,
    inferior: 400,
};
let qtd;

function comprar() {
    qtd = document.getElementById('qtd').value;
    calcula(document.getElementById('tipo-ingresso').value);
}
function calcula(tipoEscolhido) {
    if (qtd > listaIngresso[tipoEscolhido]) {
        alert(`Somente ${listaIngresso[tipoEscolhido]} igressos do tipo ${tipoEscolhido} disponiveis.`);

    } else {
        listaIngresso[tipoEscolhido] = listaIngresso[tipoEscolhido] - qtd;

        if (listaIngresso[tipoEscolhido] <= 0) {
            document.getElementById(`qtd-${tipoEscolhido}`).textContent = `ESGOTADO`;
        } else {
            document.getElementById(`qtd-${tipoEscolhido}`).textContent = `${listaIngresso[tipoEscolhido]}`;
        }
    }
}




























