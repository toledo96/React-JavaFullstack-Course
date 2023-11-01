
const findAllUsers = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data
}

const data = await findAllUsers();
console.log(data)