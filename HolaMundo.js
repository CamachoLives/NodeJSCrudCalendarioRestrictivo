/*
console.log("Hola mundo");
let myNumber = 1;
console.log(typeof myNumber);

myNumber = myNumber + "8";
console.log(typeof myNumber);

//Null is direct relationated's object
let myNull = null;
console.log(typeof myNull);

//undefined is direct relationated's variable
let myUndefined = undefined;
console.log(typeof myUndefined);


let a = 5;
let c = "5";


console.log("validacion --> ", a == c);
console.log("validacion --> ", a === c);



//DIAS DE LA SEMANA USANDO LA SENTENCIA SWITCH

let Dias = 2;

switch(Dias){
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("No hay casos concordes");
        break;
}

//SENTENCIA WHILE
let x = 1, z = 7;
let y = 0;
while(x <= 5){
    
   // console.log("Suma -->", x + x);
    x++;
    
}


//SENTENCIA FOR
for(let q = 0; q <= 30; q++){
    let p = q % 2;
    if (p === 0){
        //console.log("Es par, Numero --> ", q );
    }else{
      //  console.log("Es impar, Numero -->", q );
    }
}
//DECLARACION DEL ARREGLO
    let array = ["Valentina", 7, 66, "Cristian", true];
//LEER LOS VALORES
    console.log(array.length);

    for(i = 0; i < array.length; i++){
        console.log('The array -->', array[i]); 

    }
*/ 

    /**
     * THESE SECCION I'VE LEARNT ABOUT THE HERENCES IN JS 
     * IMPORTANT THOSE WORDS--> 'Super(ValuesOFFather)', 'Extends ("NAME'S CLASS FATHER")' 
     */
    class Fabrica{

        constructor(lapices, color){
            this._lapices = lapices
            this._color = color
        }
        //HERE WE WILL OBTAIN THE VALUE IF WE NEEDED
        get lapices(){
            return this._lapices
        }
        get color(){
            return this._color
        }
        //ACA ES DONDE SE ESTABLECE EL LAPIZ SI SE VA HACER ALGUNA MODIFICACION
        set lapices(lapices){
            this._lapices = lapices
        }
    }

    class DISTRIBUIDOR extends Fabrica{


        constructor(lapices,color,dealer){
            super(lapices,color)
            this._lapices = lapices
            this._color = color
            this._dealer = dealer
        }

        get dealer(){
            return this._dealer
        }

        set dealer(dealer){
            this._dealer = dealer
        }
    }

    
    let pencil = new Fabrica('Norma', 'Yellow')
    console.log("FABRICA -->", pencil);

    let dealer = new DISTRIBUIDOR("FABERCASTLE","BLACK","PASAREX")
    console.log("DEALER -->", dealer)
