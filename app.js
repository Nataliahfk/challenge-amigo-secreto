// array para almacenar los nombres de los amigos
let amigos =[];

// función para agregar amigos
function agregarAmigo(){
    const inputAmigo = document.getElementById('amigo').value;
    const nombreAmigo = inputAmigo; /*El método trim elimina los espacios en blanco en 
                                                          ambos extremos del string*/
    
    // Validar que el campo no está vacion
    let nombre;
    if (nombre === ""){
        alert ('Favor ingresar nombre;')
    return;                                 // Detiene la ejecución de la f(x)
    }                                           

    // Validar que el nombre no este duplicado
    if(amigos.includes(nombreAmigo)) {
        alert(`El nombre ${nombreAmigo} ya se encuentra en la lista`);
    return;
    }

    // Agregar el nombre a la lista de amigos
    amigos.push(nombreAmigo);

    // Limpiar el campo de entrada
    function limpiarInput (){
        document.querySelector('#amigo').value = '';
    } 
     
limpiarInput();    
    // Actualizar la lista en el HTML

actualizarLista();    

}

// funcion para actualizar la lista amigos de la interfaz
function actualizarLista(){
    const listaAmigos = document.getElementById('listaAmigos');

    // Limpiar el contenido actual de la lista
    listaAmigos.innerHTML = ""; // Borra cualquier contenido previo dentro del contenedor de la lista

    // Recorrer el array con ciclo for
    for(let i = 0 ; i < amigos.length; i++) { // recorre la lista
        const li = document.createElement('li'); //crea un nuevo elemento 'li'
        li.textContent = amigos[i]; //asigna el texto del elemento 'li' al nombre del amigoactual en la lista
        listaAmigos.appendChild(li); // agrega el elemento 'li'al contenedor de la lista en el DOM
    }
}


// función para seleccionar un amigo aleatorio
function sortearAmigo(){
    // Validar que haya amigos disponibles
    if(amigos.length === 0){ // Comprueba si el array 'amigos' esta vacio
        alert("No hay amigos disponibles para sortear. Agregar un nombre ");
    return; //detiene la ejecución de la f(x)
    }    
    // Genera un indice aleatorio
    const indiceAleatorio = (Math.floor(Math.random()*amigos.length)); /*genera un número aleatorio entre 0 y el 
                                                                    largo del array*/    
                                                                                                                                      
    const amigoSorteado = amigos[indiceAleatorio]; // Usa el indice aleatorio para obtener el nombre de la lista                                                                    
    
    
    //Mostrar el resultado en el HTML
    const resultado = document.getElementById('resultado'); // Obtiene el elementom del DOM con id 'resultdo'   
    resultado.innerHTML = `Amigo sorteado: <strong> ${amigoSorteado} </strong>`; 
}