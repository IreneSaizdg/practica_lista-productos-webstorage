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



//EVENTOS:
//Evento SUBMIT añadir producto
productForm.addEventListener("submit", ((event)=>{
    event.preventDefault();
    const productName = productForm.elements["name"].value
    // console.log(nombreProducto)
    // console.log(arrayProductos)
    const formatedId = productName.split(" ").join("-")
    // console.log(formatedId) 

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

    
}))



/*SUBMIT -> formulario */ //.find para comprobar si un producto existe o no, si existe aumenta el contador si no, se añade el producto a la tabla


/*CLICK -> eliminar -> */ // eliminar prductos con .filter(id !== del id que está buscando el botón)

/*eliminar/


/*añadirAlCarrito
    si existe -> incrementar contador
    si no push de nuevo producto
*/
 



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

