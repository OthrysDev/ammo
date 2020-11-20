import MockedSocket from 'socket.io-mock';

let socket = new MockedSocket();

socket.on('bullet', () => {
    // TODO
    console.log('bullet received');
});

export default socket.socketClient;
