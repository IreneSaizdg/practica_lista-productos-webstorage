// VARIABLES -> EVENTOS -> FUNCIONES -> INVOCACIÓN A FUNCIONES.


// VARIABLES: 
const productList = document.querySelector("#productList");
const productForm = document.querySelector("#productForm");
const fragment = document.createDocumentFragment();
console.log(productForm)


//array productos:
let productArray = [
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
    createTable()
}))


//Evento: CLICK, eliminar producto
/*CLICK -> eliminar -> */ // eliminar prductos con .filter(id !== del id que está buscando el botón)

productList.addEventListener("click", ((event) =>{
    if (event.target.classList.contains("deleteButton")){ //Si hacemos click en un botón eliminar se ejecutará el siguiente bloque de código:
        const productId = event.target.dataset.productId
        const existingProduct = productArray.find((product) => productId === product.id)//Encuentra el primer elemento que tiene ese id. 
        
        existingProduct.count -=1
        if(existingProduct.count === 0){//Elimina el elemento del array si el contador llega a 0
            productArray = productArray.filter((product) => productId !== product.id)//Filtra el array y devuelve los productos con un id distinto al del botón.
            //Transformamos el product array filtrándolo.
        }
        
        createTable()
    }
}))



function deleteProduct(){
    
}





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


//Función: Pintar tabla
/**
 * Creates table product (one row). It has a name, a count, and a button for edition. 
 * @param {object} product Atributes-> name : string, count : number.
 * @returns {HTMLElement} The new Table row.
 */
function createTableProduct(product){
    const tableRow = document.createElement("TR")
    const tableColName = document.createElement("TD")
    const tableColCount = document.createElement("TD")
    const tableColEdition = document.createElement("TD")
    const deleteProductButton = document.createElement("BUTTON")

    tableColName.textContent = product.name
    tableColCount.textContent = product.count
    deleteProductButton.textContent = "ELIMINAR"
    deleteProductButton.classList.add("deleteButton") //crea una clase "deleteButton" para todos los botones de eliminar.
    deleteProductButton.dataset.productId = product.id //dataset se inventa un atributo de una etiqueta html que puede contener lo que quieras
    
    tableRow.append(tableColName, tableColCount, tableColEdition)
    tableColEdition.append(deleteProductButton)
    return tableRow
}

/**
 * Creates full table with a row per product inside the product array. First deletes the previous content and refills with the updated array. 
 */
function createTable(){
    productList.innerHTML = '' //innerHTML es un atributo
    productArray.forEach((product) => {
        const newRow = createTableProduct(product) //Genera todos los objetos
        fragment.append(newRow) //Los guarda en un fragment (ahorra tiempo y recursos)
    }) 
    productList.append(fragment)

}






