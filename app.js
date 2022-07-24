// https://www.calculator.net/ohms-law-calculator.html?type=1&v=110&vunit=volt&c=0.2&cunit=ampere&r=&runit=ohm&p=&punit=watt&x=60&y=10

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const resistanceRadio = document.getElementById('resistanceRadio');
const voltageRadio = document.getElementById('voltageRadio');
const currentRadio = document.getElementById('currentRadio');
const powerRadio = document.getElementById('powerRadio');

let resistance;
let voltage = v1;
let current = v2;
let power = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

resistanceRadio.addEventListener('click', function() {
  variable1.textContent = '(V) Voltage (V)';
  variable2.textContent = '(I) Current (A)';
  variable3.textContent = '(P) Power (W)';
  voltage = v1;
  current = v2;
  power = v3;
});

voltageRadio.addEventListener('click', function() {
  variable1.textContent = '(R) Resistance (Ω)';
  variable2.textContent = '(I) Current (A)';
  variable3.textContent = '(P) Power (W)';
  resistance = v1;
  current = v2;
  power = v3;
});

currentRadio.addEventListener('click', function() {
  variable1.textContent = '(R) Resistance (Ω)';
  variable2.textContent = '(V) Voltage (V)';
  variable3.textContent = '(P) Power (W)';
  resistance = v1;
  voltage = v2;
  power = v3;
});

powerRadio.addEventListener('click', function() {
  variable1.textContent = '(R) Resistance (Ω)';
  variable2.textContent = '(V) Voltage (V)';
  variable3.textContent = '(I) Current (A)';
  resistance = v1;
  voltage = v2;
  current = v3;
});


btn.addEventListener('click', function() {
  
  if(resistanceRadio.checked)
    result.textContent = `Rresistance = ${computeRresistance().toFixed(2)} Ω`;

  else if(voltageRadio.checked)
    result.textContent = `Voltage = ${computeVoltage().toFixed(2)} V`;

  else if(currentRadio.checked)
    result.textContent = `Current = ${computeCurrent().toFixed(2)} A`;

  else if(powerRadio.checked)
    result.textContent = `Power = ${computePower().toFixed(2)} W`;
})

// calculation

function computeRresistance() {
  if(Number(power.value) === 0)
    return Number(voltage.value) / Number(current.value);

  else if(Number(voltage.value) === 0)
    return Number(power.value) / Math.pow(Number(current.value), 2);

  else if(Number(current.value) === 0)
    return Math.pow(Number(voltage.value), 2) / Number(power.value);
}

function computeVoltage() {
  if(Number(power.value) === 0)
    return Number(current.value) * Number(resistance.value);

  else if(Number(resistance.value) === 0)
    return Number(power.value) / Number(current.value);

  else if(Number(current.value) === 0)
    return Math.sqrt(Number(power.value) * Number(resistance.value));
}

function computeCurrent() {
  if(Number(power.value) === 0)
    return Number(voltage.value) / Number(resistance.value);

  else if(Number(resistance.value) === 0)
    return Number(power.value) / Number(voltage.value);

  else if(Number(voltage.value) === 0)
    return Math.sqrt(Number(power.value) / Number(resistance.value));
}

function computePower() {
  if(Number(resistance.value) === 0)
    return Number(voltage.value) * Number(current.value);

  else if(Number(current.value) === 0)
    return Math.pow(Number(voltage.value), 2) / Number(resistance.value);

  else if(Number(voltage.value) === 0)
    return Math.pow(Number(current.value), 2) * Number(resistance.value);
}