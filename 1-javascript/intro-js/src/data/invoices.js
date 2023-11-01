export const invoices = [
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

const invoiceById = (id) => {
    return invoices.find(i => i.id === id);
}

const findInvoicesById = (id) => {
    const promise = new Promise((resolve,reject) => {
        setTimeout(() => {
            // console.log('realizando alguna tarea con demora')
            const result = invoiceById(id);
            if(result){
                resolve(result)
            }else{
                reject('error: no existe el id')
            }
            
        },2500);
    });
    return promise
}

export{
    invoiceById,
    findInvoicesById
}