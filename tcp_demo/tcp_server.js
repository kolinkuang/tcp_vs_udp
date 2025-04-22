// TCP Server & Client (Reliable, Connection-oriented)
const net = require('net');

// TCP Server
const tcpServer = net.createServer((socket) => {
    console.log('TCP Client connected:', socket.remoteAddress);

    socket.on('data', (data) => {
        const msg = data.toString();
        console.log(`TCP Received: ${msg}`);
        socket.write(`ACK: ${msg}`); // Guaranteed reply
    });

    socket.on('end', () => console.log('TCP Client disconnected'));
    socket.on('error', (err) => console.error('TCP Error:', err.message));
});

tcpServer.listen(3000, () =>
    console.log('TCP Server listening on port 3000')
);
