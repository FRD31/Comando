// chatbot.js

// Palabras clave y respuestas
const responses = {
    "rally": "¡Los autos de rally son bestias fuera del camino! ¿Sabías que uno de los más icónicos es el Subaru Impreza WRX?",
    "italiano": "Los autos deportivos italianos son puro lujo y velocidad. Lamborghini, Ferrari... ¡son el sueño de cualquier amante de los autos!",
    "deportivo": "Un auto deportivo está diseñado para el rendimiento a alta velocidad. ¿Te interesa algún modelo en particular?",
    "ferrari": "Ferrari es un ícono en el mundo de los autos deportivos. La Ferrari F8 Tributo es una verdadera joya de la velocidad.",
    "lamborghini": "Lamborghini es sinónimo de potencia. El Lamborghini Aventador SVJ es uno de los mejores de su clase.",
    "hola": "Hola yo soy Comando, asistente virtual que sabe sobre autos.",
    // Agrega más palabras clave y respuestas según sea necesario
};

// Función para hacer que el bot responda en texto y voz
function respond(input) {
    let response = "Lo siento, no tengo información sobre eso.";
    for (let key in responses) {
        if (input.includes(key)) {
            response = responses[key];
            break;
        }
    }

    // Agregar respuesta en el chat
    const chatBox = document.getElementById('chat-box');
    const botMessage = document.createElement('p');
    botMessage.textContent = `Comando: ${response}`;
    chatBox.appendChild(botMessage);

    // Text to Speech (respuesta en voz)
    const utterance = new SpeechSynthesisUtterance(response);
    utterance.lang = 'es-ES';
    speechSynthesis.speak(utterance);
    
    // Scroll al final
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Enviar mensaje al presionar el botón
document.getElementById('send-btn').addEventListener('click', () => {
    const userInput = document.getElementById('user-input').value.toLowerCase();
    
    // Mostrar el mensaje del usuario
    const chatBox = document.getElementById('chat-box');
    const userMessage = document.createElement('p');
    userMessage.textContent = `Tú: ${userInput}`;
    chatBox.appendChild(userMessage);
    
    // Respuesta del bot
    respond(userInput);
    
    // Limpiar el campo de entrada
    document.getElementById('user-input').value = '';
});
