// TCP Client
const net = require('net');

const tcpClient = net.createConnection({ port: 3000 }, () => {
    console.log('Connected to TCP server');
    tcpClient.write('TCP Message 1');
    tcpClient.write('TCP Message 2'); // Will arrive in order
});

tcpClient.on('data', (data) =>
    console.log(`TCP Response: ${data.toString()}`)
);

tcpClient.on('error', (err) => console.error('TCP Client Error:', err));
