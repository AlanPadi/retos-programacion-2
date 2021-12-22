const Num1 = parseInt(prompt('ingrese un numero'))
const Num2 = parseInt(prompt('ingrese un numero'))
const Num3 = parseInt(prompt('ingrese un numero'))

if (Num1>Num2 && Num1>Num3) {
    alert(`${Num1} es el mayor`)
}if (Num2>Num1 && Num2>Num3) {
    alert(`${Num2} es el mayor`)
}if (Num3>Num2 && Num3>Num1) {
    alert(`${Num3} es el mayor`)
}else{
    alert(`Uno de los numeros es igual a otro`)
}