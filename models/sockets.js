class Sockets {

    constructor(io) {
        this.io = io;


        this.socketEvents();
    }

    socketEvents(){
        this.io.on('connection', (socket) => { 
            //enviar msg
            /* socket.emit('mensaje-bienvenida', {
                msg: 'Bienvenido al server',
                fecha: new Date(),
            }) */
        
            //escuchar o recibir mensaje
            socket.on('mensaje-to-server',(data)=> {
                console.log(data);
                this.io.emit('mensaje-from-server', data);
            });
         });
    }
}

module.exports = Sockets;