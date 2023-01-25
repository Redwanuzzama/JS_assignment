function powerCalculate(Voltage, Current){
    return Voltage * Current;
}

let circuitPower_1 = powerCalculate(230, 10);
console.log(circuitPower_1);

let circuitPower_2 = powerCalculate(110, 3);
console.log(circuitPower_2);

let circuitPower_3 = powerCalculate(480, 20);
console.log(circuitPower_3);
