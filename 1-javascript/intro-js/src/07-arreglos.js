const products = ['mesa','silla','teclado']

const fruits = ['pera','manzanas','sandias','frutillas']

products.push("mouse") //agregar

// iterar arreglo
products.forEach(product => {
    console.log(product)
})

//otra forma de iterar
for(const prod of products){
    console.log(prod)
}

// creando arreglo nuevo con spread
const mercado = [...fruits , ...products, 'lechugas', 'uvas']

console.log(mercado)