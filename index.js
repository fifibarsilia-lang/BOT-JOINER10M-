// Importamos la librería
const { Client, GatewayIntentBits } = require('discord.js');

// Creamos el cliente del bot
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds, // Para saber en qué servidores está
    GatewayIntentBits.GuildMessages, // Para recibir mensajes
    GatewayIntentBits.MessageContent // Para leer el contenido de los mensajes
  ]
});

// Evento cuando el bot se conecta
client.once('ready', () => {
  console.log(`¡Listo! Conectado como ${client.user.tag}`);
});

// Evento cuando alguien envía un mensaje
client.on('messageCreate', message => {
  if (message.author.bot) return; // Ignorar otros bots
  if (message.content === '!hola') {
    message.channel.send('¡Hola! Soy tu bot 🤖');
  }
});

// Conectamos el bot usando el token seguro
client.login(process.env.TOKEN);
