let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
let kelvin = document.getElementById("kelvin");

celsius.oninput = function(){
    let f = (parseFloat(celsius.value) * 1.8) + 32;
    let k = parseFloat(celsius.value) + 273.15;

    fahrenheit.value = f.toFixed(2);
    kelvin.value = k.toFixed(2);
}

fahrenheit.oninput = function(){
    let c = (parseFloat(fahrenheit.value) -32) / 1.8;
    let k = ((parseFloat(fahrenheit.value) -32) / 1.8) + 273.15;

    celsius.value = c.toFixed(2);
    kelvin.value = k.toFixed(2);
}

kelvin.oninput = function(){
    let c = parseFloat(kelvin.value - 273.15);
    let f = ((parseFloat(kelvin.value - 273.15)) * 1.8) / 32;

    celsius.value = c.toFixed(2);
    kelvin.value = k.toFixed(2);
}