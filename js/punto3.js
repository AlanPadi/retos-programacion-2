const NumIngresado = parseInt(prompt('ingrese un numero'))

if(NumIngresado >= 1 || NumIngresado<= 9){
    alert('El numero ingresado es de un digito')
}else if(NumIngresado >= 9 || NumIngresado <=99 ){
    alert('El numero ingresado es de dos digitos')
}