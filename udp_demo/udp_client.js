// UDP Client
const dgram = require('dgram');

const udpClient = dgram.createSocket('udp4');
const udpMessages = ['UDP Datagram 1', 'UDP Datagram 2'];

udpClient.on('message', (msg) =>
    console.log(`UDP Response: ${msg.toString()}`)
);
udpClient.on('error', (err) => console.error('UDP Client Error:', err));

// Send messages with 1s interval
let counter = 0;
const interval = setInterval(() => {
    // udpClient.send(udpMessages, 4000, 'localhost');
    if (counter < udpMessages.length) {
        udpClient.send(udpMessages[counter], 4000, 'localhost');
        counter++;
    } else {
        clearInterval(interval);
        udpClient.close();
    }
}, 1000);
