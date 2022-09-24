const elements = ['Fire', 'Air', 'Water'];

let rtaFinal = '';
const separator = '--';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rtaFinal = rtaFinal + element + separator;
}
console.log('for', rtaFinal);

const rta = elements.join('--');
console.log('join', rta);


//**************************************************************************************/
//SPLIT
const tittle = 'Curso de manipulación de arrays';
const tittleFinal = tittle.split(' ').join('-').toLowerCase();
console.log(tittleFinal);