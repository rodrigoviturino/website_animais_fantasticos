export default function initFetchBitcoin(){

    fetch(`https://blockchain.info/ticker`)
        .then(response => response.json())
        .then(bitcoin => {
            const spanBitcoin = document.querySelector('.bitcoin');
            spanBitcoin.innerHTML = (1000 / bitcoin.BRL.sell).toFixed(4);
        }).catch(erro => {
        console.log(Error(erro))
    })
}


// https://blockchain.info/ticker