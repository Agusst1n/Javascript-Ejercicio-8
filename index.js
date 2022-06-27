//*! Crea un archivo JS que contenga las siguientes líneas

//*! - Una función sin parámetros que devuelva siempre "true"

//*! - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

//*! - Una función generadora de índices pares automáticos


const sinParametros = ()=>{
    return true
}

console.log(sinParametros())


const Promesa = new Promise ((resolve) =>{
    setTimeout(()=> resolve('Hola soy una promesa'),5000)
})

Promesa.then(res => console.log(res))


function* generadora(){
    let id = 0;

    while(true){
        id += 2

        if(id===10){
            return id
        }
        yield id
    }
}

let gen = generadora()

console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())

