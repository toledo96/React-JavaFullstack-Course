const invoice = {
    id: 10,
    name: 'Compras de oficina',
    date: new Date(),
    client: {
        id:2,
        name: 'Jhon',
        lastName: 'Doe',
        age: 20
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
    ],
    total: function(){
        let total = 0;
        this.items.forEach(item => {
            total = total + item.price*item.quantity;
        });
        return total;
    },
    greeting: function (){
        return `Hola mundo ${this.client.name}`
    }
}

// == -> evalua el contenido
// === -> evalua el contenido y el tipo de dato

// Esto es la misma instancia, misma referencia, si cambiamos algo de invoice2 igual se cambiara en invoice porque es la misma referencia
const invoice2 = invoice;

// Se debe hacer con el operador spread que hace una copia y así ya son 2 objetos distintos
const invoiceSpread = {...invoice}


