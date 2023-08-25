const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', (qr) => {
    console.log('QR RECEIVED', qr);
});

client.on('ready', () => {
    console.log('Client is online');
});

client.on('message', message => {
    if (message.body.toLowerCase() === 'hello') {
        message.reply('Hello there!');
    } else if (message.body.toLowerCase() === 'how are you') {
        message.reply('I am a bot, I do not have feelings, but thank you for asking');
    } else if (message.body.toLowerCase() === 'what is your name') {
        message.reply('I am a bot created by your programmer friend');
    } else if (message.body.toLowerCase().includes('thank you')) {
        message.reply('You are welcome!');
    } else {
        message.reply('Sorry, I did not understand that. Could you please rephrase?');
    }
});

client.initialize();
