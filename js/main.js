// VARIABLES -> EVENTOS -> FUNCIONES -> INVOCACIÓN A FUNCIONES.


// VARIABLES: 
const productList = document.querySelector("#productList");
const productForm = document.querySelector("#productForm");
console.log(productForm)





//array productos:
const productArray = [
    // {
    //     id: "x-1", //dinámico. Transformar el nombre de producto en un id, reemplazar espacios por un guión.
    //     nombre: "producto 1",
    //     cantidad: 1
    // }
]



//EVENTOS:----------------------------------------------------------------------------------------------//

//Evento: SUBMIT, añadir producto
productForm.addEventListener("submit", ((event)=>{
    event.preventDefault();
    addProduct(productForm.elements["name"].value) 
}))










//FUNCIONES:----------------------------------------------------------------------------------------------//

/**
 * Add a product to the product Array. If already exists increment count +1, if not, create a new product object.
 * @param {string} productName Name of the product to insert in the product Array. 
 */
function addProduct(productName){
    const formatedId = productName.split(" ").join("-")

    const existingProduct = productArray.find((product) => productName === product.name)//Si no existe devuelve undefined, si sí el primer elemento que cumple la condición. 
    if (existingProduct !== undefined){
        //Si ya hay un producto/objeto con ese nombre.
        existingProduct.count += 1 
    } else {
        //Si no existe un producto/objeto con ese nombre, añade un nuevo producto
        const newProduct = {
        id: formatedId,
        name: productName,
        count: 1 
        }
        productArray.push(newProduct)//Añade el newProduct al array de productos
    }
    console.log(productArray)
}






/*CLICK -> eliminar -> */ // eliminar prductos con .filter(id !== del id que está buscando el botón)

/*eliminar/



 



// FUNCIONES: 























/**
 * Agrega un producto a la cesta.
 * @param {Object} - Describe un parámetro de la función.
 * @returns {string} - Describe el valor que devuelve la función.
 * @example - Da un ejemplo de uso. 
 * @see {Tipo} - Referencia a otra función, clase o recurso. 
 * @throws {Tipo} - Indica que la función puede lanzar un error. 
 */

function agregarProducto(){}

