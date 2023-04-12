function inflationCalculator() {
    let sentence = document.querySelector('.new-sentence');
    if (sentence != null) {
        sentence.remove();
    }
    //handle html elements
    let inflationRate = document.querySelector('#inflationRate');
    inflationRate = parseFloat(inflationRate.value);
    let money = document.querySelector('#money');
    money = parseFloat(money.value);
    let years = document.querySelector('#years');
    years = parseFloat(years.value);
    let newElement = document.createElement('div');
    newElement.className= 'new-sentence';
    //calculate inflation
    let worth = money + money*(inflationRate/100);;
    for(let i = 0; i < years; i++) {
        worth += worth*(inflationRate/100);
    }
    worth = worth.toFixed(2);
    //display answer
    if (isNaN(money) || isNaN(years) || isNaN(inflationRate)) {
        newElement.innerText= `You have not filled in all the fields correctly.`;
    }
    else {
        if (years == 1) {
            var textYear = 'year';
        }
        else {
            var textYear = 'years'; 
        }
        newElement.innerText= `Today's ${money}$ will be worth ${worth}$ in ${years} ${textYear}.`;
    }
    document.querySelector('.container-content').appendChild(newElement);
}