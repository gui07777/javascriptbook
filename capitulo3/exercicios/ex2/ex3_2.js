function calcWeight() {
    var inName = document.getElementById('inName').value;
    var radioSex = document.querySelector('input[name="option"]:checked');
    var inHeight = document.getElementById('inHeight').value;
    var height = Number(inHeight);
    var outResponse = document.getElementById('outResponse');

    if (radioSex.value === 'M') {
        console.log('radioSex: ' + value)
        let calc = 22 * (height ** 2) + ' kg';
        outResponse.textContent = inName + ': Seu peso ideal é ' + calc;
    } else if (radioSex.value === 'F') {
        console.log('radioSex: ' + value)
        let calc = 21 * (height ** 2) + ' kg';
        outResponse.textContent = inName + ': Seu peso ideal é ' + calc;
    }
}

function clean() {
    inName.textContent = '';
    inHeight.textContent = '';
}

document.getElementById('btnCalc').addEventListener('click', calcWeight);
document.getElementById('btnClean').addEventListener('click', clean);

// os valores dos inputs ja estao vindo, porem o do sexo ainda nao