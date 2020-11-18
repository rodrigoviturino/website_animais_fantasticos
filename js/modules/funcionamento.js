export default function initFuncionamento(){

}

let funcionamento = document.querySelector('[data-semana]');
// Convertendo Array de String para Array Number
const diasSemana = funcionamento.dataset.semana.split(',').map(Number)
const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);

const dataAgora = new Date();
const diaAgora = dataAgora.getDay(); // dia da semana em numero
const horarioAgora = dataAgora.getHours();
// console.log(horarioAgora)


let t = diasSemana.indexOf(diaAgora);
const semanaAgora = diasSemana.indexOf(diaAgora) !== -1;

const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1] );

if(semanaAgora && horarioAberto){
    funcionamento.classList.add('aberto')
}

// console.log(semanaAgora);


// console.log(horario)
// console.log(diasSemana)
// console.log(horarioSemana)