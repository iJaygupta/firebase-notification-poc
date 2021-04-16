importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-messaging.js');


firebase.initializeApp({
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID"
})

const initMessaging = firebase.messaging()