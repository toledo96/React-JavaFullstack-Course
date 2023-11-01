import { invoiceById } from "./data/invoices";

const promise = new Promise((resolve,reject) => {
    setTimeout(() => {
        // console.log('realizando alguna tarea con demora')
        const result = invoiceById(2);
        if(result){
            resolve(result)
        }else{
            reject('error: no existe el id')
        }
        
    },2500);
});


promise.then((result) => {
    console.log(result)
    console.log('realizada con exito alguna tarea con demora')
}).catch((error) => {
    console.error(error)
})

//forma resumida
promise.then(console.log).catch(console.error)

