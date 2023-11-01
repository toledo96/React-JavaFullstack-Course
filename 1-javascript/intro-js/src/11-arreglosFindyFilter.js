const invoices = [
    {
        id: 1,
        name: 'Compras de oficina',
        date: new Date(),
        client: {
            name: 'Jhon',
            lastName: 'Doe',
        },
        items: [
            {
                producto: 'sillas',
                price: 3909,
                quantity: 2
            },
            {
                producto: 'mesas',
                price: 5000,
                quantity: 1
            }
        ]
    },
    {
        id: 2,
        name: 'Compras de computacion',
        date: new Date(),
        client: {
            name: 'Jhon',
            lastName: 'Doe',
        },
        items: [
            {
                producto: 'keyboard',
                price: 399,
                quantity: 2
            },
            {
                producto: 'mouse',
                price: 500,
                quantity: 1
            }
        ]
    },
    {
        id: 3,
        name: 'Compras de papeleria',
        date: new Date(),
        client: {
            name: 'Jhon',
            lastName: 'Doe',
        },
        items: [
            {
                producto: 'papel',
                price: 50,
                quantity: 2
            },
            {
                producto: 'lapices',
                price: 110,
                quantity: 1
            }
        ]
    }
]


//Map recibe un objeto, pero devuelve el objeto(copia del arreglo inmutable) a diferencia del foreach que no devulve nada
const invoicesName = invoices.map( i => {
    return i.name;
})

const invoicesClientName = invoices.map( i => {
    return i.client.name;
})

console.log(invoicesClientName)

// metodo Find para encontrar a través de un arreglo
const invoiceFind = invoices.find(i => i.id === 3); // se puede buscar por cualquier atributo del arreglo

console.log(invoiceFind)

//Metodo filter, debe de tener una condicion
const invoiceFilter = invoices.filter( i => i.id > 1)
console.log(invoiceFilter)

// Método some
const result = invoices.some( i => i.client.name === 'Jhon')
console.log(result)



