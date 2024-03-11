const currency1 = document.getElementById("currency1");
const currency2 = document.getElementById("currency2");
const count = document.getElementById("count");
const equal = document.getElementById("equal");
const exchangeRate = document.getElementById("exchangeRate");


updateRate();
function updateRate(){
    fetch(
        ` https://v6.exchangerate-api.com/v6/2dc41deec7aa1ec9dd036a04/latest/${currency1.value}`
    )
        .then((res) => res.json())
        .then((data) => { 

    console.log(data)
    const rate = data.conversion_rates[currency2.value] 

    exchangeRate.textContent = ` 1 ${currency1.value} = ${rate} ${currency2.value} `
    equal.textContent = (count.value * rate).toFixed(2)  
    }) 
}

currency2.addEventListener("change",updateRate); 
count.addEventListener("input",updateRate); 