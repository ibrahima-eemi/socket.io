# 🚀 Chat en Temps Réel avec Express & Socket.IO

Ce projet est une application de chat en temps réel développée avec Node.js, Express, et Socket.IO. Il permet aux utilisateurs de discuter instantanément, tout en affichant l'historique des messages lorsqu'un nouvel utilisateur rejoint la room.

## 📌 Fonctionnalités

- ✅ Messagerie instantanée avec Socket.IO
- ✅ Interface moderne et responsive
- ✅ Historique des messages visible pour les nouveaux utilisateurs (limité à 50 messages)
- ✅ Affichage des notifications de connexion et déconnexion
- ✅ Gestion des pseudos pour identifier les participants
- ✅ Défilement automatique vers le dernier message

## 📦 Installation et Exécution

1. **Cloner le dépôt**

    ```sh
    git clone https://github.com/ibrahima-eemi/chat-socketio.git
    cd chat-socketio
    ```

2. **Installer les dépendances**

    ```sh
    npm install
    ```

3. **Démarrer le serveur**

    ```sh
    node server.js
    ```

4. **Accéder à l'application**

    Ouvrez un navigateur et allez sur : [http://localhost:3000](http://localhost:3000)

## 🛠 Structure du Projet

```plaintext
chat-socketio/
│── public/             # Contient les fichiers statiques (HTML, CSS, JS)
│   ├── index.html      # Interface utilisateur du chat
│── server.js           # Serveur Express et WebSocket
│── package.json        # Fichier des dépendances npm
│── README.md           # Documentation du projet
```

## ⚙️ Technologies Utilisées

- **Node.js** – Serveur d'exécution
- **Express.js** – Gestion du serveur HTTP
- **Socket.IO** – Communication WebSocket en temps réel
- **HTML / CSS / JavaScript** – Interface utilisateur

## 📜 Comment Utiliser ?

- Entrez votre pseudo pour rejoindre le chat.
- Envoyez des messages visibles par tous les utilisateurs connectés.
- Recevez une notification lorsque quelqu’un rejoint ou quitte la room.
- Voyez l’historique des messages récents dès votre arrivée.

## 🔥 Améliorations Possibles

- 💡 Ajout de salons (rooms) pour discuter en groupes privés
- 💡 Sauvegarde des messages en base de données (MongoDB, Firebase, etc.)
- 💡 Ajout d'avatars pour chaque utilisateur
- 💡 Thème sombre et clair au choix

📩 Si vous souhaitez d'autres fonctionnalités, n'hésitez pas à proposer des idées !

## 🤝 Contribuer

1. Fork ce dépôt
2. Créez une branche (`git checkout -b feature-nouvelle-fonctionnalite`)
3. Commitez vos modifications (`git commit -m "Ajout d'une nouvelle fonctionnalité"`)
4. Poussez la branche (`git push origin feature-nouvelle-fonctionnalite`)
5. Ouvrez une Pull Request 📌

## ⚖️ Licence

Ce projet est sous licence MIT – Vous pouvez l'utiliser et le modifier librement.
