console.log("PRODUCTOS-SERVICIOS");


const listaProductos = () => fetch("http://localhost:3000/producto").then(respuesta => respuesta.json());

const creaproducto = (name,imageurl,price,description) =>  {
    return fetch(`http://localhost:3000/producto`,  {
        method: 'POST',
        headers: {
            'Content- Type' : 'application/json'
        },
        body: JSON,stringify({
            name,
            imageurl,
            price,
            description
        })
    })
    .then( respuesta => {
        if(respuesta.ok){
            return respuesta.body
        }
        throw new Error('No fue posible crear un producto')
    })
};

export const productoServices = {
    listaProductos,
     creaproducto
}