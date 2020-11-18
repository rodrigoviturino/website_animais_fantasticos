export default function initAnimaNumero(){

    function animaNumeros(){
    
        const numeros = document.querySelectorAll('[data-numero]')
    
        numeros.forEach( (numero) => {
            const total = +numero.innerHTML;
            const incremento = Math.floor( total / 100);
            console.log('212',incremento); 
            let start = 0;
            
            const timer = setInterval(() => {
                start = start + incremento;
                // console.log(start)
                numero.innerText = start;
                if(start > total){
                    numero.innerText = total;
                    clearInterval(timer)
                }
            }, 50 * Math.random());
    
            // console.log(total);
        })
    
    }
    
    function handleMutation(mutation){
        if ( mutation[0].target.classList.contains('ativo')) {
            observer.disconnect()
            animaNumeros();
        }
    }
    
    let observerTarget = document.querySelector('.numeros');
    const observer = new MutationObserver(handleMutation );
    // quem vai observar ? e vai observar oq do elemento?
    observer.observe(observerTarget, { attributes: true})
}
