export const invoice = {
    id: 10,
    name: 'Componentes PC',
    client: {
        name: 'Pepe',
        lastName: 'Doe',
        address: {
            country: 'USA',
            city: 'Los Angeles',
            street: 'One Street',
            number:12
        }        
    },
    company: {
        name: 'New Egg',
        fisicalNumber: 1234567
    },
    items: [
        {
            product: 'CPU intel i7',
            price: 499,
            quantity: 1

        },
        {
            product: 'Corsair KeyBoard Mecanico',
            price: 150,
            quantity: 1

        },
        {
            product: 'Monitor Asus',
            price: 350,
            quantity: 1

        }
    ]
}