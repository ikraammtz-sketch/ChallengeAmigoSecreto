// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let amigo = inputAmigo.value.trim().replace(/\s+/g, ' ');

    if (amigo === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    let regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    if (!regex.test(amigo)) {
        alert('El nombre solo puede contener letras y espacios (sin números ni caracteres especiales).');
        return;
    }

    let resultado = document.getElementById('resultado');

    // Para reinicar si ya se sorteó
    if (resultado.innerHTML !== '') {
        amigos = [];
        resultado.innerHTML = '';
        document.getElementById('listaAmigos').innerHTML = '';
    }

    // validar duplicados 
    let Yaexiste = amigos.some(n => n.toLowerCase() === amigo.toLowerCase());
    if (Yaexiste) {
        alert('Este nombre ya fue agregado.');
        return;
    }

    amigos.push(amigo);
    inputAmigo.value = '';
    mostrarListaAmigos();
}

function mostrarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach(nombre => {
        let li = document.createElement('li');
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Agrega al menos un amigo.');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>Tu amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}
