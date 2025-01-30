// sw.js

// Ouça o evento de instalação do Service Worker
self.addEventListener('install', (event) => {
  // Importar o script externo
  importScripts('https://cdn.pushalert.co/sw-77509.js');
});

// Ouça o evento de fetch (requisições de rede)
self.addEventListener('fetch', (event) => {
  // Lógica de interceptação de requisições
});
