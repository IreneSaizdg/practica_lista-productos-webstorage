// VARIABLES -> EVENTOS -> FUNCIONES -> INVOCACIÓN A FUNCIONES.


// VARIABLES: 
const productList = document.querySelector("#productList");
const productForm = document.querySelector("#productForm");
const validationErrorMessage = document.querySelector("#validationErrorMessage");
const fragment = document.createDocumentFragment();


//Array productos:
let productArray = []//Caga los productos guardados en el navegador (si existen). 

//EVENTOS:----------------------------------------------------------------------------------------------//


//Evento: SUBMIT, añadir producto
productForm.addEventListener("submit", ((event)=>{
    event.preventDefault();
    const productName = productForm.elements["name"].value
    if(validate(productName)){
        addProduct(productName) 
        createTable()
        validationErrorMessage.textContent = ""
    }else{
        validationErrorMessage.textContent = "Nombre inapropiado, solo puede contener letras y espacios."
        
    }
    
}))


//Evento: CLICK, eliminar producto
//productList.addEventListener("click", deleteProduct)
productList.addEventListener("click", (event) =>{
     if (event.target.classList.contains("deleteButton")){ //Si hacemos click en un botón eliminar se ejecutará el siguiente bloque de código:
        const productId = event.target.dataset.productId //Accede al id del producto (establecido dentro del objeto dataset)
        deleteProduct(productId)
        createTable() //Invoca la función que re-crea la tabla esta vez sin los productos eliminados.
     }
})






//FUNCIONES:----------------------------------------------------------------------------------------------//
/**
 * Check if a string has min two characters, only contains letter and blank spaces.
 * @param {string} str the string to validate.
 * @returns {bool} Return if the string meets the requirements.
 */
const validate = str =>{
    const regEx = /^[a-zA-ZÀ-ÿ\s]{2,40}$/
    return regEx.test(str)
}


//Función: Añadir producto al Array (creación o incremento en contador)
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

    saveProductsForLocalStorage()//Guarda los cambios del productArray
}


//Función: Pintar Producto
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


//Función: Pintar tabla
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


//Función borrar Producto
/**
 * When clicking on the button the
 * @param {MouseEvent} event - Click event generated when clicking on the "Eliminar" button.
 */
function deleteProduct(productId){
    const existingProduct = productArray.find((product) => productId === product.id)//Encuentra el primer elemento que tiene ese id. 
    
    existingProduct.count -=1
    if(existingProduct.count === 0){//Elimina el elemento del array si el contador llega a 0
        productArray = productArray.filter((product) => productId !== product.id)//Filtra el array y devuelve los productos con un id distinto al del botón.
        //Transformamos el product array filtrándolo.
    }
    
    saveProductsForLocalStorage() //Guarda los cambios del productArray
    
    
}


/*Funciones Local Storage:
    Guardar y recuperar productArray en el almacenamiento del navegador local. */

//Guardar para local Storage:
/**
 * Saves the product Array data: saves it in a key, and turns it into a string. 
 */
function saveProductsForLocalStorage(){
    localStorage.setItem("productArray", JSON.stringify(productArray)) //Almacena (key, value) el contendido de productArray y lo convierte en un string.
}

//Recuperar para el local Storage:
/**
 * Recovers the product Array data: recovers the string and turns it into an array of objects.
 * @returns {Array<Object>} An array of product objects recovered from localStorage, or an empty array if none exist.
 */
function recoverProductsForLocalStorage(){
    const recoveredProducts = JSON.parse(localStorage.getItem("productArray")) || [];//Recupera ese string y lo convierte en un array de objetos de nuevo.
    return recoveredProducts
}




//INVOCACIONES:-------------------------------------------------------------------------------------//

productArray = recoverProductsForLocalStorage() 
createTable(); //Recupera los productos guardados en el navegador (si existen) al inicializar.
