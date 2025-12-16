function calcWeight() {
    var inName = document.getElementById('inName').value;
    var radioSex = document.querySelector('input[id="option"]:checked').value;
    var inHeight = document.getElementById('inHeight').value;
    var height = Number(inHeight);
    var outResponse = document.getElementById('outResponse');
    if (radioSex === 'M') {
        let calc = 22 * (height ** 2);
        outResponse.textContent = inName + ': Seu peso ideal é ' + calc.toFixed(3) + ' kg';
    } else if (radioSex === 'F') {
        let calc = 21 * (height ** 2);
        outResponse.textContent = inName + ': Seu peso ideal é ' + calc.toFixed(3) + ' kg';
    }
}

function clean() {
    document.getElementById('outResponse').textContent = '';
    document.getElementById('inHeight').value = '';
    document.getElementById('inName').value = '';
    document.querySelector('#option').checked = false;
}

document.getElementById('btnCalc').addEventListener('click', calcWeight);
document.getElementById('btnClean').addEventListener('click', clean);