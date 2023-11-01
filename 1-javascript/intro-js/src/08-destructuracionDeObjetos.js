const user = {
    username: 'Andrés',
    emai: 'andres@gmail.com',
    age:20,
    ranking: 9
}

//Destructurar
const {username,age} = user;
console.log(username)
console.log(age)

//Destructuracion en funciones
const detail = (user) => {
    const {username,age} = user;
    console.log(`El detalle del usuario ${username}`)
}

detail(user);
