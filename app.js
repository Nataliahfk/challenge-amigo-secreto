// array para almacenar os nombres de los amigos
let amigos =[];

// función para agregar amigos
function agregarAmigo(){
    let inputAmigo = document.getElementById('amigo').value.trim();
    let nombreAmigo = inputAmigo; /*El método trim elimina los espacios en blanco en 
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
function actualizarLista(){
    let listaAmigos = document.getElementById('listaAmigos');

    // Limpiar el contenido actual de la lista
    listaAmigos.innerHTML = ""; // Borra cualquier contenido previo dentro del contenedor de la lista

    // Recorrer el array con ciclo for
    for(let i = 0 ; i < amigos.length; i++){
        let arrayAmigos = document.createElement('arrayAmigos');
        arrayAmigos.textContent = amigos[i];
        listaAmigos.appendChild(arrayAmigos);
    }
}


// función para seleccionar un amigo aleatorio
function sortearAmigo(){
    // Validar que haya amigos disponibles
    if(amigos.length=== 0){ // Comprueba si el array 'amigos' esta vacio
        alert("No hay amigos disponibles para sortear. Agrega al menos uno");
    } return;

    // Genera un indice aleatorio
    let indiceAleatorio = Math.floor(Math.random()*amigos.length); /*genera un número aleatorio entre 0 y el 
                                                                    largo del array*/ 
    
    let amigoSorteado = amigos[indiceAleatorio]; // Usa el indice aleatorio para obtener el nombre de la lista                                                                    
    
    //Mostrar el resultado en el HTML
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: <strong> ${amigoSorteado} </strong>`;
}