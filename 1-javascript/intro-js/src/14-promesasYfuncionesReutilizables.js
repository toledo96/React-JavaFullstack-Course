import { invoiceById, findInvoicesById } from "./data/invoices";





// promise.then((result) => {
//     console.log(result)
//     console.log('realizada con exito alguna tarea con demora')
// }).catch((error) => {
//     console.error(error)
// })

//forma resumida
findInvoicesById(2).then(console.log).catch(console.error)
