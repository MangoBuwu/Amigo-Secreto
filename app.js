let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    amigos.forEach((amigo, index) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega al menos un amigo antes de sortear.");
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];
    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<p>🎉 ¡El amigo secreto es: <strong>${amigoSecreto}</strong>! 🎉</p>`;
    
    // Ocultar la lista de amigos
    document.getElementById("listaAmigos").innerHTML = "";
    amigos = [];
    
    // Mostrar la imagen del amigo secreto
    let imagen = document.getElementById("imagenAmigoSecreto");
    if (imagen) {
        imagen.style.display = "block";
    }
}

// Ocultar la imagen al inicio
document.addEventListener("DOMContentLoaded", () => {
    let imagen = document.getElementById("AmigoSecretoIMG");
    if (imagen) {let amigos = [];

        function agregarAmigo() {
            let input = document.getElementById("amigo");
            let nombre = input.value.trim();
        
            if (nombre === "") {
                alert("Por favor, ingresa un nombre válido.");
                return;
            }
        
            if (amigos.includes(nombre)) {
                alert("Este nombre ya está en la lista.");
                return;
            }
        
            amigos.push(nombre);
            actualizarLista();
            input.value = "";
        }
        
        function actualizarLista() {
            let lista = document.getElementById("listaAmigos");
            lista.innerHTML = "";
            
            amigos.forEach((amigo, index) => {
                let li = document.createElement("li");
                li.textContent = amigo;
                lista.appendChild(li);
            });
        }
        
        function sortearAmigo() {
            if (amigos.length === 0) {
                alert("Agrega al menos un amigo antes de sortear.");
                return;
            }
            
            let indiceAleatorio = Math.floor(Math.random() * amigos.length);
            let amigoSecreto = amigos[indiceAleatorio];
            
            let resultado = document.getElementById("resultado");
            resultado.innerHTML = `<p>🎉 ¡El amigo secreto es: <strong>${amigoSecreto}</strong>! 🎉</p>`;
            
            // Ocultar la lista de amigos
            document.getElementById("listaAmigos").innerHTML = "";
            amigos = [];
            
            // Mostrar la imagen del amigo secreto buscándola por su nombre de archivo
            let imagenes = document.getElementsByTagName("img");
            for (let img of imagenes) {
                if (img.src.includes("amigo-secreto.png")) {
                    img.style.display = "block";
                }
            }
        }
        
        // Ocultar la imagen al inicio
        document.addEventListener("DOMContentLoaded", () => {
            let imagenes = document.getElementsByTagName("img");
            for (let img of imagenes) {
                if (img.src.includes("amigo-secreto.png")) {
                    img.style.display = "none";
                }
            }
        });
        
        imagen.style.display = "none";
    }
});
