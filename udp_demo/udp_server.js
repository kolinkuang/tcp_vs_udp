// UDP Server & Client (Unreliable, Connectionless)
const dgram = require('dgram');

// UDP Server
const udpServer = dgram.createSocket('udp4');

udpServer.on('message', (msg, rinfo) => {
    console.log(`UDP Received from ${rinfo.address}:${rinfo.port}: ${msg}`);
    udpServer.send(`UDP Reply: ${msg}`, rinfo.port, rinfo.address); // No delivery guarantee
});

udpServer.on('listening', () =>
    console.log('UDP Server listening on port 4000')
);
udpServer.on('error', (err) => console.error('UDP Error:', err));
udpServer.bind(4000);
