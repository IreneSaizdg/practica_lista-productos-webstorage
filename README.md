## Ejercicio Lista de productos con LocalStorage

### **Enunciado del Ejercicio:**

Crea una aplicación web para gestionar una lista de productos, donde el usuario pueda agregar productos a través de un formulario. Los productos se deben almacenar en **Local Storage** y mostrarse en una tabla en la página web. Si el usuario agrega un producto que ya existe, en lugar de duplicarlo, se debe incrementar un contador que indique cuántas veces se ha agregado el producto. Además, añade un botón "Eliminar" para cada producto que, al hacer clic, debe **decrementar** el contador de ese producto. Si el contador llega a cero, el producto debe eliminarse de la lista y del **Local Storage**.

#### **Requisitos:**

1. **Formulario de entrada de productos**: Permitir al usuario ingresar productos a través de un campo de texto y un botón de "Agregar".
2. **Almacenamiento en Local Storage**: Los productos se deben almacenar en **Local Storage** y deben persistir incluso si la página se recarga.
3. **Manejo de productos duplicados**: Si el usuario agrega un producto que ya existe, en lugar de duplicarlo, se debe incrementar el contador de ese producto.
4. **Decremento del contador al eliminar productos**: Si el usuario hace clic en "Eliminar" para un producto que se ha agregado varias veces, el contador debe decrementar. Si el contador llega a cero, el producto debe eliminarse completamente.
5. **Persistencia de la tabla**: Al recargar la página, los productos deben cargarse desde el **Local Storage**.

### **Explicación del funcionamiento:**

1. **Formulario de entrada de productos**:

   - El usuario puede ingresar productos a través del campo de texto. Al hacer clic en "Agregar Producto", se desencadena la función `agregarProducto()`.

2. **Almacenamiento en Local Storage**:

   - Los productos ingresados se guardan en **Local Storage**. Cada producto tiene un nombre y un contador que indica cuántas veces ha sido agregado.
   - Si un producto ya existe, su contador se incrementa en lugar de duplicarlo.

3. **Mostrar productos en la tabla**:

   - Los productos almacenados en **Local Storage** se muestran en una tabla. Cada fila contiene:
     - El nombre del producto.
     - Un contador que indica cuántas veces se ha agregado.
     - Un botón "Eliminar" que permite decrementar el contador o eliminar completamente el producto si el contador llega a cero.

4. **Eliminar o decrementar productos**:
   - Si el producto se ha agregado más de una vez, al hacer clic en el botón "Eliminar", el contador disminuye.
   - Si el contador llega a uno, el producto se elimina completamente de la lista.