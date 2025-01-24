// array para almacenar os nombres de los amigos
let amigos =[];

// función para agregar amigos
function agregarAmigo(){
    const inputAmigo = document.getElementById('amigo').value.trim();
    const nombreAmigo = inputAmigo; /*El método trim elimina los espacios en blanco en 
                                                          ambos extremos del string*/
}     

// Validar que el campo no está vacion
if (nombre === ""){
    alert ('Favor ingresar nombre;')
    return;                                 // Detiene la ejecución de la f(x)
}                                           

// Validar que el nombre no este duplicado

if(amigos.includes(nombreAmigo)){
    alert(`El nombre ${nombreAmigo} ya se encuentra en la lista`);
    return;
}

// Agregar el nombre a la lista de amigos
amigos.push(nombreAmigo);

// Limpiar el campo de entrada
function limpiarInput (){
    document.querySelector('#amigo').value = '';
}
// Actualizar la lista en el HTML
actualizarLista();    

// funcion para actualizar la lista amigos de la interfaz


// función para seleccionar un amigo aleatorio