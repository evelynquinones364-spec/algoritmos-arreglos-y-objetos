function SaludarAprendices() {

    let aprendices = ['Cedeño', 'Rojas', 'Tinoco', 'Juan Jose',
        'Julian', 'Andres', 'Juan Diego',
        'Yen Manuelis', 'Maria Paula', 'Montoya',
        'Triviño', 'Erick', 'Erika', 'Daniel',
        'Juanfer', 'Richard', 'Guillen',
        'Juan Hoyos', 'Leandro'];

    let inmuebles = [];

    // Mostrar el aprendiz ubicado en la posición 2
    console.log("Aprendiz en la posición 2:");
    console.log(aprendices[2]);

    // Mostrar la cantidad de elementos del arreglo
    console.log("Cantidad de aprendices:");
    console.log(aprendices.length);

    // Modificar un aprendiz
    aprendices[3] = "Angely";

    console.log("Cantidad después de modificar:");
    console.log(aprendices.length);

    // Agregar un nuevo aprendiz
    aprendices.push("Sofia");

    console.log("Lista actualizada de aprendices:");
    console.log(aprendices.length);

}

function ListaEstudiantes() {

    // Crear un arreglo con 5 estudiantes
    let estudiantes = [
        'Julian', 'Evelyn', 'Mariana',
        'Juan Jose', 'Andres'
    ];

    console.log("Lista de estudiantes");
    console.log(estudiantes);

    console.log("Primer estudiante");
    console.log(estudiantes[0]);

    console.log("Tercer estudiante");
    console.log(estudiantes[2]);

    console.log("Ultimo estudiante");
    console.log(estudiantes[estudiantes.length - 1]);

    console.log("Cantidad de estudiantes");
    console.log(estudiantes.length);

    console.log("Estudiantes y sus posiciones:");

    for (let i = 0; i < estudiantes.length; i++) {

        console.log("Posición " + i + ": " + estudiantes[i]);

    }

    // Ingresar un nuevo estudiante
    let nuevoEstudiante = prompt("Ingrese el nombre del nuevo estudiante:");

    if (nuevoEstudiante !== null && nuevoEstudiante.trim() !== "") {

        estudiantes.push(nuevoEstudiante);

    }

    console.log("Nueva cantidad de estudiantes:");
    console.log(estudiantes.length);

    // Buscar un estudiante
    let buscar = prompt("Ingrese el nombre del estudiante que desea buscar:");

    if (buscar !== null && estudiantes.includes(buscar)) {

        console.log(buscar + " sí se encuentra registrado.");

    } else {

        console.log(buscar + " no se encuentra registrado.");

    }

    console.log("Lista actualizada de estudiantes:");
    console.log(estudiantes);

}




function AdministrarProductos() {

    let productos = ['Arroz', 'Leche', 'Pan', 'Huevos', 'Azúcar'];

    console.log("Productos registrados:");
    console.log(productos);

    // Modificar el segundo producto
    productos[1] = 'Queso';

    console.log("Segundo producto modificado:");
    console.log(productos);

    // Agregar productos
    productos.push('Aceite');
    productos.unshift('Café');

    console.log("Arreglo actualizado:");
    console.log(productos);

    // Buscar un producto
    let buscar = prompt("Ingrese el producto que desea buscar:");

    let posicion = productos.indexOf(buscar);

    if (posicion !== -1) {

        console.log("El producto sí está registrado.");
        console.log("Posición del producto: " + (posicion + 1));

    } else {

        console.log("El producto no está registrado.");

    }

    // Modificar un producto por posición
    let posicionModificar = Number(
        prompt("Ingrese la posición del producto que desea modificar:")
    );

    if (posicionModificar >= 1 && posicionModificar <= productos.length) {

        let nuevoNombre = prompt("Ingrese el nuevo nombre del producto:");

        if (nuevoNombre !== null && nuevoNombre.trim() !== "") {

            productos[posicionModificar - 1] = nuevoNombre;

            console.log("Producto modificado correctamente.");

        }

    } else {

        console.log("Posición no válida.");

    }

    // Eliminar el último producto
    productos.pop();

    console.log("Cantidad de productos:");
    console.log(productos.length);

    console.log("Listado final:");
    console.log(productos);

}




function EliminarElementos() {

    // Crear un arreglo con seis ciudades de Colombia
    let ciudades = [
        'Bogotá', 'Medellín', 'Cali',
        'Cartagena', 'Barranquilla', 'Bucaramanga'
    ];

    // Eliminar la última ciudad
    ciudades.pop();

    console.log("Después de eliminar la última ciudad:");
    console.log(ciudades);

    // Eliminar la primera ciudad
    ciudades.shift();

    console.log("Después de eliminar la primera ciudad:");
    console.log(ciudades);

    // Eliminar una ciudad desde la posición 3
    ciudades.splice(3, 1);

    console.log("Resultado final:");
    console.log(ciudades);

    // Agregar nuevas ciudades
    ciudades.push('Pereira');
    ciudades.push('Manizales');

    console.log("Cantidad de ciudades:");
    console.log(ciudades.length);

    console.log("Listado de ciudades:");

    for (let i = 0; i < ciudades.length; i++) {

        console.log("Posición " + (i + 1) + ": " + ciudades[i]);

    }

    // Buscar una ciudad
    let buscar = prompt("Ingrese el nombre de una ciudad:");

    if (buscar !== null && ciudades.includes(buscar)) {

        console.log("La ciudad " + buscar + " sí se encuentra registrada.");

    } else {

        console.log("La ciudad " + buscar + " no se encuentra registrada.");

    }

}






function BusquedaEstudiante() {  
     
    // crear un arreglo con ocho nombres de estudiantes
    let nombres = ['Angely', 'Juan Jose', 'Evelyn', 'Mariana', 'Julian', 'Andres', 'Camilo', 'Samuel'];

    // solicitar al usuario el nombre de un estudiante
    let nombre = prompt("Ingrese el nombre de un estudiante");
    
    // verificar si existe 
    if (estudiantes.includes(nombre)){
        console.log("El estudiante existe");
    } else {
        console.log("El estudiante no existe");
    }

    // obtener su posicion
    let posicion = estudiantes.indexOf(nombre);
    console.log("Posición: " + Posición);

    // mostrar un mensaje si fue encontrado o no
    if (estudiantes.includes(nombre)){
        console.log("El estudiante fue encontrado");
    } else {
        console.log("El estudiante no fue encontrado");
    }


    // si existe, mostrar la posicion en la que se encuentra
    let Posición = estudiantes.indexOf(nombre);
    if (Posición !== -1){
        console.log("El estudiante se encuentra en la posición: " + Posición);
    } else {
        console.log("El estudiante no existe");
    }

    // solicitar un segundo nombre
    let segundoNombre = prompt("Ingrese el segundo nombre");
    if (estudiantes.includes(nombre)){
        console.log("El estudiante esta registrado");
    } else {
        console.log("El estudiante no esta registrado");
    }

    // contar cuantos estudiantes tienen un nombre que comienza por una letra determinada
    let letra = prompt("Ingrese la letra");
    let contador = 0;
    for (let nombre of estudiantes){
        if (nombre.toLowerCase().startsWitch(letra.toLowerCase())) {
            contador++;
        }
    }
    console.log("Cantidad de estudiantes: " + contador);

    // mostrar todos los nombres utilizando un recorrido con for
    for (let i = 0; i < estudiantes.length; i++){
        console.log(estudiantes[i]);+ estudiantes

    }

    // permitir agregar un estudiante nuevo si no esta registrado
    let nuevo = prompt("Ingrese nuevo estudiante");
    if (!estudiantes.includes(nuevo)){
        estudiantes.push(nuevo);
        console.log("Estudiante agregado correctamente");
    } else {
        console.log("El estudiante ya esta registrado");
    }

    // mostrar el listado actualizado y la cantidad total de estudiantes
    console.log("Listado actualizado:");
    for (let i = 0; i < estudiantes.length; i++){
        console.log(estudiantes[i]);
    }
    console.log("Total de estudiantes: " + estudiantes.length);

}





function SmartSalud(){
    function smartsalud() {
  // 1. Arreglo con ocho especialidades
  let especialidades = [
    "Pediatría",
    "Cardiología",
    "Dermatología",
    "Neurología",
    "Oftalmología",
    "Traumatología",
    "Ginecología",
    "Medicina general"
  ];

  // 2. Mostrar todas las especialidades
  console.log("Especialidades registradas:");
  console.log(especialidades);

  // Consultar elementos mediante su índice
  console.log("Primera especialidad:", especialidades[0]);
  console.log("Cuarta especialidad:", especialidades[3]);

  // 3. Mostrar la cantidad de especialidades
  console.log("Cantidad:", especialidades.length);

  // 4. Recorrer el arreglo
  for (let i = 0; i < especialidades.length; i++) {
    console.log("Posición " + i + ": " + especialidades[i]);
  }


   

  // 5. Agregar especialidades
  especialidades.push("Psiquiatría");       // Agrega al final
  especialidades.unshift("Endocrinología"); // Agrega al inicio
  console.log(especialidades);
  // 6. Modificar una especialidad por su posición
  especialidades[2] = "Alergología";
  console.log(especialidades);


  // 7. Eliminar especialidades
  especialidades.pop();       // Elimina la última
  especialidades.shift();     // Elimina la primera
  especialidades.splice(1, 1); // Elimina la posición 1

  // 8. Buscar una especialidad
  let buscada = "Neurología";

  if (especialidades.includes(buscada)) {
    console.log(buscada + " está registrada.");
  } else {
    console.log(buscada + " no está registrada.");
  }

  // Búsqueda adicional con indexOf()
  let posicion = especialidades.indexOf("Neurología");
  console.log("Posición de Neurología:", posicion);

  // 10. Funcionalidad adicional: mostrar especialidades en orden alfabético
  let ordenadas = [...especialidades];
  ordenadas.sort();
  console.log("Especialidades ordenadas:", ordenadas);

  // 10. Funcionalidad adicional: contar cuántas especialidades contienen una letra
  let letra = "o";
  let cantidadConLetra = 0;

  for (let i = 0; i < especialidades.length; i++) {
    if (especialidades[i].toLowerCase().includes(letra)) {
      cantidadConLetra++;
    }
  }

  console.log("Especialidades que contienen la letra '" + letra + "':", cantidadConLetra);

  // 9. Mostrar el listado actualizado
  console.log("Cantidad actualizada:", especialidades.length);
  console.log("Listado actualizado:", especialidades);
}
}









// Introduccion a objetos de JavaScript 
function inventarioProducto(){
    let nombre = "pc portatil";
    let marca = "Acer";
    let precio = 4000000;
    let cantidad = 50;
}




function inventarioCel(){
    let nombre2 = "celular";
    let marca2 = "iphone";
    let precio2 = 3700000;
    let cantidad2 = 11;

    const producto={
        nombre: "Pc",
        marca: "Lenovo",
        precio: 2100000,
        cantidad: 1

        
    }
    console.log(producto.nombre)
    console.log(producto)
            
    
}

//registro de un estudiante

function registroEstudiante (){
   const estudiante = {
        nombre:"Evelyn",
        apellido: "Quiñones",
        edad: 16,
        programaf:"ADSO",
        numerof:3593362,
        correo:"eveqv364@gmail.com"
    }

    console.log(estudiante);
    console.log(estudiante.nombre); 
    console.log(estudiante.apellido);
    console.log(estudiante["programaf"]);

    estudiante.edad = 17;
    console.log(estudiante.edad);

    //modificar la edad
    estudiante.ciudad = "Bogota";
    console.log(estudiante);

    //eliminar la propiedad
    delete estudiante.correo;
    console.log(estudiante);

    //recores las propiedades
    for (let propiedad in estudiante) {
        console.log(propiedad + ":" + estudiante[propiedad]);

        
    }

    //objeto actualizado
    console.log(estudiante);
    
    
    
    
    
}  


//
let productos =["pc"]


function gestionarPersona (){
    const persona = {
        nombre: "Evelyn",
        edad: 16,
        Genero: "femenino",
        saludar: function (){
            console.log("Hola, soy " + this.nombre + " y tengo " + this.edad + " años ")
        }
    }
    persona.saludar();
}
    

function gestionarproducto() {
    const producto={
        nombre:"Teclado",
        precio: 320000,
        cantidad: 26,
        mostrarInfo(){
            console.log("producto:" + this.nombre);
            console.log("producto:" + this.precio);
            console.log("producto:" + this.cantidad);
            
            
            
        }
    }
    producto.mostrarInfo();
}



function gestionarEmpleado() {
    const empleado={
        nombre: "Felipe",
        cargo:"Profesor",
        salariom:6000000,
        diastrabajados:23,
        porcentajed: 0.04,

        calcularSalario: function () {
            let salariodias =this.salariom/30;
            let salario = salriodias * this.diastrabajados;

            console.log("El salario del empleado es: +  salario");
        }
        
    }

}




function gestionarempleado2(){
    const empleado = {
        nombre: "Evelyn Quiñones",
        cargo: "Desarrollador Front",
        salarioMensual: 15000000,
        diasTrabajados: 20,
        porcentajeDescuento: 4,

        calcularSalario: function (){
            let salarioDia = this.salarioMensual/30
            let salarioSD = this.diasTrabajados*salarioDia;
            return salarioSD

        },
        
        calcularSalario: function(){
            let descuento = (this.calcularSalario() * this.porcentajeDescuento)/100;
            return salario;

        },
        calcularTotalaPagar:function(){
           let total = this.calcularSalario() - this.calcularDescuento();
           console.log("El total a pagar sin descuento es de:" + this.calcularSalario);
           console.log("El total de descuento es de: " + this.calcularDescuento);
           console.log("El total neto es pagar (con descuento): " + this.calcularDescuento());

    }
}
}



function calcularSalario(){
    let empleado ={
        nombre: prompt("Ingrese sus nombres:"),
        cargo: prompt("Ingrese su cargo: "),
        salarioMensual: parseInt(prompt("Ingrese su salario Mensual:")),
        diasTrabajados: parseInt(prompt("Ingrese los dias trabajados:")),
        porcentajeDescuento: 4, 
        calcularSalario: function(){
            let salarioDia= this.salarioMensual/30;
            let salarioSD = this.diasTrabajados*salariaDia;
            return parseInt(salariosSD);
        },
        calcularDescuento: function(){
            let descuento = (this.calcularSalario() * this.prorcentajeDescuento)/100
            return parseInt(descuento);

        },
        calcularTotalaPagar: function(){
            let total = this.calcularSalario() - this.calcularDescuento();
            alert("El total a pagar sin descuesto es de: " + this.calcularSalario());
            alert("El total del descuento es de: " + this.calcularDescuento());
            alert("El total neto a pagar (con descuento): " + total);
        }
    }
    empleado.calcularTotalaPagar();
}