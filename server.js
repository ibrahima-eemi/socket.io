const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Servir les fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Stockage de l'historique des messages
let chatHistory = [];

io.on('connection', (socket) => {
    console.log('🔵 Un utilisateur est connecté');

    // Envoyer l'historique des messages au nouvel utilisateur
    socket.emit('chat history', chatHistory);

    // Gestion des pseudos
    socket.on('set username', (username) => {
        socket.username = username;
        socket.broadcast.emit('user connected', `${username} a rejoint le chat`);
        console.log(`👤 ${username} a rejoint le chat`);
    });

    // Réception et diffusion des messages
    socket.on('chat message', (msg) => {
        const messageData = { user: socket.username || 'Anonyme', msg };
        
        // Stocker dans l'historique (limité à 50 messages pour éviter une surcharge mémoire)
        chatHistory.push(messageData);
        if (chatHistory.length > 50) {
            chatHistory.shift(); // Supprime le plus ancien message
        }

        // Diffuser à tous les utilisateurs
        io.emit('chat message', messageData);
        console.log(`💬 ${messageData.user}: ${messageData.msg}`);
    });

    // Gestion de la déconnexion
    socket.on('disconnect', () => {
        console.log('🔴 Un utilisateur est déconnecté');
        if (socket.username) {
            socket.broadcast.emit('user disconnected', `${socket.username} a quitté le chat`);
        }
    });
});

server.listen(3000, () => console.log('🚀 Serveur de chat sur http://localhost:3000'));
