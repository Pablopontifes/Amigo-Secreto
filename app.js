
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre_amigo = input.value.trim();

    
    if (nombre_amigo === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    amigos.push(nombre_amigo);

    input.value = "";

    actualizarListaAmigos();
}

// actualizar la lista de amigos
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; 
    amigos.forEach((amigo,index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}- ${amigo}`;
        listaAmigos.appendChild(li);
    });
}

// realizar el sorteo aleatorio
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');
    popupMessage.textContent = `Tu amigo secreto es: ${amigoSecreto}`;
    popup.style.display = "flex";

    const closePopupButton = document.getElementById('close-popup');
    closePopupButton.onclick = () => {
        popup.style.display = "none";
    };

    const tryAgainButton = document.getElementById('try-again');
    tryAgainButton.onclick =() => {
        popup.style.display = "none";
        sortearAmigo();
    };
    }

function handleKeyPress(event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
}