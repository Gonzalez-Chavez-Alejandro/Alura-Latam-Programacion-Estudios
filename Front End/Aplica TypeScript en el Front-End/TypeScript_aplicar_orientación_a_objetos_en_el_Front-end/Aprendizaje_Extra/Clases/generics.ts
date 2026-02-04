function ejemplo(value: any): any {//resibe un valor y retorna un valor 
    return value;
}
const num= ejemplo(5)//devuelve un any
const str= ejemplo("Hola")//deuelve un any

function ejemplo2<T>(value: T): T {
    return value;
}
const num2= ejemplo2<number>(5)//devuelve un number
console.log(typeof num2)
const str2= ejemplo2<string>("Hola")//devuelve un string