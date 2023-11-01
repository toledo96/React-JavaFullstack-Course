function sayHello(name){
    const greeating = `hola desde funcion de return ${name}`
    // console.log("hola desde funcion")
    return greeating
}

//funcion anonima
const sayHola = function(name){
    const greeating = `hola desde funcion de return ${name}`
    // console.log("hola desde funcion")
    return greeating
}

//funcion de flecha 
const sayHola2 = (name) => {
    const greeating = `hola desde funcion de flecha ${name}`
    // console.log("hola desde funcion")
    return greeating
}

const greeating = sayHola2("Andres");
console.log(greeating)
// console.log(sayHello())








