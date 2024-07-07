let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSortedos = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

  
    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
}else {
    if (numeroUsuario > numeroSecreto) {
        asignarTextoElemento('p', 'El número secreto es menor');   
    }else {
        asignarTextoElemento('p', 'El número secreto es mayor');
    }
    intentos++;
    limpiarCaja();
}
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value='';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

console.log(numeroGenerado);
console.log(listaNumerosSortedos);

//si ya sorteamos todos los numeros
    if(listaNumerosSortedos.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sorteron todos los números posibles');
    }else {


        //si el numero generado esta incluido en la lista
        if(listaNumerosSortedos.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        }else {
            listaNumerosSortedos.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}


function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje al Intervalo de numeros
    condicionesIniciales();
     //Inicialixar el número intentos
    //Generar el número aleatorio
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();




/*function mostrarHola() {
    console.log("¡Hola, Mundo!");
}

mostrarHola();*/

/*function mostrarNombre(nombre, apellido) {
    console.log(`¡Hola, ${nombre}  ${apellido}`);
}

mostrarNombre("Alice", "Gajardo");*/



/*function mostrarApellido(apellido) {
    console.log(`¡Hola, ${apellido}`);
}
mostrarApellido("Gajardo");*/


/*function calcularDoble(numero) {
    return numero * 2;
}

let resultadoDoble = calcularDoble(7);
console.log(resultadoDoble);*/

/*function calcularPromedio(a, b, c) {
    return(a + b + c) / 3;
}
let promedio = calcularPromedio(4, 7, 10);
console.log(promedio);*/


/*function encontrarNumero(a,b) {
    return a > b ? a:b;
}

    let numeroMayor = encontrarNumero(15,9);
    console.log(numeroMayor);*/

/*function multiplicarNumero(a) {
    return a * a;
}
    let resultado = multiplicarNumero(3);
    console.log(resultado);*/

/*//1.Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
    function calcularIMC(altura, peso) {
        var imc = peso /(altura * altura);
        return imc;
    } 

    

    //2.Crea una función que calcule el valor del factorial de un número pasado como parámetro.
    function calcularFactorial(numero) {
        if (numero === 0 || numero === 1) {
            return 1;
        }else {
            return numero + calcularFactorial(numero - 1);
        }
    }

    //3.Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales. Para esto, considera la cotización del dólar igual a R$4,80.
    function convertirDolaresReales(dolares) {
        var cotizacionDolar = 4.80;
        var reales = dolares * cotizacionDolar;
        return reales;
    }

    let valorEnDolar = 50;
    let valorEnReales = convertirDolaresReales(valorEnDolar);
    console.log(`${valorEnDolar} dolares es R$ ${valorEnReales}`);
    
    //4.Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
    function calcularAreaYPerimetroRectangular(altura, anchura) {
        var area = altura * anchura;
        var perimetro = 2 * (altura + anchura);
        console.log("Area: " + area);
        console.log("Perimetro: " + perimetro);
    }

    let altura = 3;
    let anchura = 5;
    calcularAreaYPerimetroRectangular(altura, anchura);

    //5.Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
    function calcularAreaYPerimetroCircular(radio) {
        var pi = 3.14;
        var area = pi * radio * radio;
        var perimetro = 2 * pi * radio;
        console.log("Area: " + area);
        console.log("Perimetro: " + perimetro);
    }
    let radio = 4;
    calcularAreaYPerimetroCircular(radio);

    //6.Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
    function mostrarTablaDeMultiplicar(numero) {
        for (var i= 1; i<= 10; i++) {
            var resultado = numero * i;
            console.log(numero + " x " + i + " = " + resultado);
        }
    }
    //Ejemplo de Uso
    let numero = 7;
    mostrarTablaDeMultiplicar(numero);*/

/*//1.Crea una lista vacía llamada "listaGenerica".

    let listaGenerica = [];

//2.Crea una lista de lenguajes de programación llamada lenguagesDeProgramacion.

    let lenguajesDeProgramacion = ['javascript', 'php','python','c++'];

//3.Agrega a la lista lenguagesDeProgramacion los siguientes elementos.
    
lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');
    
//4.Crea una función que muestre en la consola todos los elementos de la lista lenguagesDeProgramacion por separado.
function mostrarLenguajesSeparadamente() {
    for (let i = 0; i< lenguajesDeProgramacion.length; i++) {
        console.log(lenguajesDeProgramacion[i]);
    }  
}
mostrarLenguajesSeparadamente();

//5.Crea una función que muestre en la consola todos los elementos de la lista lenguagesDeProgramacion de manera inversa.
    function mostrarLenguajesReversoSeparadamente() {
        for (let i = lenguajesDeProgramacion.length - 1; i >= 0; i--) {
            console.log(lenguajesDeProgramacion[i]);
        }
    }

    mostrarLenguajesReversoSeparadamente();


//6.Crea una función que calcule la media de los elementos en una lista de números.
    function calcularMedia(lista) {
        let suma= 0;
        for (let i=0; i < lista.length; i++) {
            suma += lista[i];
        }
        return suma / lista.length;
    }
        
        let numeros = [10,20,30,40,50];
        let media = calcularMedia(numeros);
        console.log('Media', media);

//7.Crea una función que muestre en la consola el número mayor y menor en una lista.
    function encontrarMayorMenor(lista) {
        let mayor=lista[0];
        let menor=lista[0];

        for(let i= 1; i < lista.length; i++) {
            if (lista[i] > mayor) {
                mayor = lista[i];
            }
            if (lista[i] < menor) {
                menor= lista[i];
            }
        }

        console.log('Mayor', mayor);
        console.log('Menor', menor);
    }
    let numerosA = [15,8,25,5,30];
    encontrarMayorMenor(numerosA);

//.Crea una función que retorne la suma de todos los elementos en una lista.
function calcularSuma(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
      suma += lista[i];
    }
    return suma;
  }
  
  let numerosB = [15, 8, 25, 5, 12];
  let suma = calcularSuma(B);
  console.log('Suma:', suma);

  //9.Crea una función que reciba una lista como parámetro y retorne el índice de un elemento también pasado como parámetro. Si ese elemento no existe en la lista, retorna -1.
  function encontrarIndiceElemento(lista, elemento) {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i] === elemento) {
        return i; // Retorna el índice del elemento encontrado
      }
    }
    return -1; // Retorna -1 si el elemento no se encuentra en la lista
  }*/
    