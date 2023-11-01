import PropTypes  from 'prop-types'

export function HelloWorld({user,id,title}) {  //props
    return <>
        <h1>Hola Mundo</h1>
        <p>que tal! {user} con el id {id} y {title}</p>
    </>
}

// export const Hello = (user) => {
//     return(
//         <>
//             <h2>Hola {user}</h2>
//         </>
//     )
// }

HelloWorld.propTypes = {
    user: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}

HelloWorld.defaultProps = {
    title : 'hola'
}